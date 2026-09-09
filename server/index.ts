import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const trimField = (value: unknown, max = 500) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

function validateLead(body: unknown) {
  const input = (body ?? {}) as Record<string, unknown>;
  const name = trimField(input.name, 120);
  const phone = trimField(input.phone, 40);
  const need = trimField(input.need, 120);
  const timeframe = trimField(input.timeframe, 120);
  const note = trimField(input.note, 500);
  const website = trimField(input.website, 120);

  if (website) return { spam: true as const };
  if (!name || name.length < 2) throw new Error("Vui lòng nhập họ và tên.");
  if (!/^[-+()\s\d]{8,25}$/.test(phone)) throw new Error("Vui lòng nhập số điện thoại hợp lệ.");
  if (!need || !timeframe) throw new Error("Vui lòng chọn nhu cầu và thời gian dự kiến.");

  return { name, phone, need, timeframe, note, spam: false as const };
}

async function sendTelegramMessage(lead: { name: string; phone: string; need: string; timeframe: string; note: string }) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const text = [
    "ASTOR 1 · LEAD MỚI",
    `Họ tên: ${lead.name}`,
    `Điện thoại: ${lead.phone}`,
    `Nhu cầu: ${lead.need}`,
    `Thời gian: ${lead.timeframe}`,
    lead.note ? `Ghi chú: ${lead.note}` : "",
  ].filter(Boolean).join("\n");

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json({ limit: "32kb" }));

  app.post("/api/leads", async (req, res) => {
    try {
      const lead = validateLead(req.body);
      if (lead.spam) return res.status(200).json({ success: true, spam: true });
      const sent = await sendTelegramMessage(lead);
      if (!sent) return res.status(503).json({ success: false, message: "Kênh tiếp nhận chưa được cấu hình." });
      return res.status(200).json({ success: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Dữ liệu chưa hợp lệ.";
      return res.status(400).json({ success: false, message });
    }
  });

  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => res.sendFile(path.join(staticPath, "index.html")));

  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`Server running on http://localhost:${port}/`));
}

startServer().catch(console.error);
