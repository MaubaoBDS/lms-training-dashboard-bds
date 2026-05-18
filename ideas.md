# Brainstorm thiết kế giao diện LMS Training Dashboard BĐS 2026

## Yêu cầu cốt lõi
- Sidebar cố định bên trái (dark background slate-800/900) với 17 hạng mục đào tạo
- Content area bên phải: Header + 3 tabs (Tài liệu / Bài kiểm tra / Kết quả)
- Font: DM Sans (heading) + Inter (body)
- Accent colors theo nhóm hạng mục
- Responsive: Desktop ưu tiên, mobile collapse sidebar

---

<response>
<text>
## Idea 1: "Corporate Academy" — Phong cách học viện doanh nghiệp cao cấp

**Design Movement**: Swiss/International Typographic Style kết hợp Corporate Minimalism

**Core Principles**:
1. Hierarchy rõ ràng qua typography weight và spacing
2. Negative space tạo cảm giác chuyên nghiệp, không chật chội
3. Accent color dùng tiết kiệm, chỉ highlight trạng thái và CTA
4. Grid system nghiêm ngặt 8px

**Color Philosophy**: Sidebar dùng gradient từ slate-900 xuống slate-800 tạo chiều sâu. Content area nền trắng tinh (#FAFBFC) với text charcoal (#1E293B). Mỗi module có accent riêng nhưng chỉ dùng ở icon, progress bar và badge — không tràn lan.

**Layout Paradigm**: Sidebar 280px cố định, content area chia thành header zone (80px) + tab navigation + scrollable content. Bảng biểu dùng zebra striping nhẹ.

**Signature Elements**: 
- Progress ring tròn ở sidebar mỗi module
- Breadcrumb-style timeline cho lộ trình 30-60-90
- Card-based quiz interface với micro-animation khi chọn đáp án

**Interaction Philosophy**: Click = instant feedback. Hover = subtle lift (translateY -1px + shadow). Tab switch = slide transition 200ms.

**Animation**: Sidebar item hover: background fade 150ms. Tab content: fade + slide-up 180ms. Progress bar: spring animation khi cập nhật. Quiz answer: scale 0.97 on press, checkmark appear 200ms.

**Typography System**: DM Sans 700 cho heading (24/20/16px), Inter 400/500 cho body (15px/14px), monospace cho số liệu KPI.
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea 2: "Notion-meets-LMS" — Phong cách tài liệu sống, editorial

**Design Movement**: Editorial Design + Documentation UI (Notion/GitBook inspired)

**Core Principles**:
1. Content-first: nội dung bài học là nhân vật chính, UI chỉ là khung
2. Readable typography với line-height rộng, max-width 720px cho prose
3. Inline interactivity: bảng, blockquote, callout box nằm trong flow đọc
4. Soft borders thay vì hard dividers

**Color Philosophy**: Sidebar slate-900 với text slate-300, active item dùng left border accent 3px + background slate-700/50. Content area: warm white (#FFFDF9) tạo cảm giác giấy. Accent colors nhẹ nhàng, pastel-ish khi dùng làm background callout.

**Layout Paradigm**: Sidebar 260px collapsible. Content area có max-width 800px centered trong vùng còn lại. Tab bar sticky dưới header. Bài học render như một trang sách dài có table of contents mini bên phải (floating).

**Signature Elements**:
- Callout boxes với icon + border-left color-coded (tip, warning, exercise)
- Inline progress chips nhỏ gọn cạnh tên module trong sidebar
- "Reading time" estimate ở đầu mỗi bài học

**Interaction Philosophy**: Scroll-driven: khi đọc bài, progress bar ở top tự cập nhật. Click vào sidebar = smooth scroll to section. Quiz = inline trong content flow, không tách tab riêng biệt (optional).

**Animation**: Page transition: crossfade 150ms. Sidebar collapse: width transition 250ms ease-out. Callout boxes: fade-in on scroll (intersection observer). Quiz feedback: color pulse 300ms.

**Typography System**: DM Sans 600/700 cho heading, Inter 400 cho body (16px, line-height 1.75), blockquote dùng italic DM Sans 500.
</text>
<probability>0.06</probability>
</response>

<response>
<text>
## Idea 3: "Mission Control" — Phong cách bảng điều khiển huấn luyện

**Design Movement**: Dashboard UI + Gamification subtle (không childish)

**Core Principles**:
1. Data-driven: mọi thứ có số, có thanh, có trạng thái
2. Module = mission: mỗi hạng mục là một "nhiệm vụ" cần hoàn thành
3. Visual feedback liên tục: biết mình đang ở đâu, còn bao xa
4. Dense but organized: nhiều thông tin nhưng hierarchy rõ

**Color Philosophy**: Sidebar dùng slate-900 với gradient subtle. Content area: nền slate-50 (#F8FAFC) với card trắng nổi bằng shadow. Accent colors mạnh hơn, dùng cho badge trạng thái (emerald = hoàn thành, amber = đang học, slate = chưa mở). Mỗi nhóm module có color-coded header stripe.

**Layout Paradigm**: Sidebar 300px với module list dạng compact (icon + tên + mini progress bar). Content area chia 2 zone: top = stats bar (3-4 metric cards), bottom = tab content. Dashboard tổng quan dùng grid 2x2 cards.

**Signature Elements**:
- XP/Level indicator ở sidebar footer (không quá game-ified, chỉ là % hoàn thành tổng)
- Streak counter: "Bạn đã học liên tục X ngày"
- Module completion badge với checkmark animation

**Interaction Philosophy**: Mỗi action = visual reward nhỏ. Hoàn thành quiz = confetti nhẹ + badge unlock. Sidebar item click = slide-in content. Hover trên stat card = tooltip chi tiết.

**Animation**: Stat numbers: count-up animation khi load. Progress bars: spring ease 400ms. Badge unlock: scale from 0.8 + opacity, 300ms. Tab switch: horizontal slide 200ms. Sidebar hover: background + scale 1.01.

**Typography System**: DM Sans 800 cho số liệu lớn, DM Sans 600 cho heading, Inter 400/500 cho body và label. Tabular numbers cho KPI.
</text>
<probability>0.07</probability>
</response>

---

## Lựa chọn: Idea 1 — "Corporate Academy"

Lý do: Phù hợp nhất với bối cảnh đào tạo doanh nghiệp BĐS chuyên nghiệp. Nội dung bài học rất dài và chi tiết nên cần hierarchy rõ, typography dễ đọc, và UI không gây phân tán. Phong cách học viện doanh nghiệp tạo cảm giác nghiêm túc, đáng tin cậy — phù hợp với tinh thần "xây nền tảng" của chương trình đào tạo.

### Quyết định thiết kế cuối cùng:
- **Sidebar**: 280px, slate-900, text white/slate-300, active = teal left-border + slate-700 bg
- **Content**: #FAFBFC background, max-width tự nhiên, text #1E293B
- **Tabs**: Tài liệu | Bài kiểm tra | Kết quả — underline style
- **Accent colors**: Teal, Blue, Violet, Amber, Rose, Emerald theo nhóm
- **Font**: DM Sans (headings) + Inter (body)
- **Animation**: Subtle, fast (150-250ms), ease-out
- **Progress**: Ring/bar indicators per module + tổng
