# Astor 1 Ciputra · Landing page

Landing page bất động sản cao cấp cho dự án **Astor 1 tại lô IA25, Khu đô thị Nam Thăng Long (Ciputra), Hà Nội**. Giao diện theo hướng editorial luxury: nền xanh rừng, màu gold, serif display và bố cục bất đối xứng để ưu tiên trải nghiệm thương hiệu và chuyển đổi.

## Nội dung đã triển khai

Trang gồm hero, tín hiệu giá rumor, câu chuyện Pristie, thông tin dự án, bộ sưu tập sản phẩm, 25 tiện ích nội khu, tiêu chuẩn bàn giao/định hình, hệ sinh thái Ciputra, gallery phối cảnh, timeline và form nhận tư vấn. Giá được trình bày đúng theo brief: **rumor price từ 95 triệu/m²**, kèm ghi chú cần xác nhận theo chính sách chính thức. Các hình ảnh lấy từ tài liệu người dùng cung cấp và được gắn nhãn là hình ảnh/phối cảnh minh họa.

Form lead có họ tên, số điện thoại, nhu cầu, thời gian dự kiến, ghi chú, honeypot chống bot, trạng thái loading/success/error và endpoint server-side `POST /api/leads`. Backend chỉ gửi Telegram khi đã cấu hình secret; nếu chưa có secret, API trả lỗi cấu hình rõ ràng thay vì giả lập gửi thành công. Không có token hoặc thông tin nhạy cảm trong frontend.

## Chạy local

```bash
pnpm install
pnpm dev
```

Landing page chạy tại `http://localhost:3000`.

## Cấu hình nhận lead

Sao chép `.env.example` thành `.env` hoặc cấu hình các biến tương ứng trên môi trường deploy:

```text
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

Hai biến này chỉ được đọc ở server-side. Sau khi cấu hình, chạy production build và start:

```bash
pnpm check
pnpm build
NODE_ENV=production pnpm start
```

## Kiểm thử

```bash
pnpm check
pnpm build
```

Đã kiểm tra thêm: asset phối cảnh trả HTTP 200, preview desktop 1440px và mobile 390px không overflow ngang; payload thiếu trường trả 400, honeypot trả success giả lập chống spam, payload hợp lệ khi chưa cấu hình Telegram trả 503 rõ ràng.

## Cấu trúc chính

```text
client/src/App.tsx       # Toàn bộ landing page và luồng form
client/src/index.css     # Design tokens, layout, responsive styles
client/public/astor/     # Phối cảnh trích xuất từ tài liệu dự án
server/index.ts          # Static server và API /api/leads
.env.example             # Biến môi trường mẫu, không chứa secret
```
