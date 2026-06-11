export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Module {
  id: number;
  title: string;
  shortDesc: string;
  icon: string;
  accentColor: string;
  content: string;
  quiz: QuizQuestion[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Tổng quan",
    shortDesc: "Dashboard tổng — tiến độ học, lộ trình 30-60-90",
    icon: "LayoutDashboard",
    accentColor: "#0d9488",
    content: `# Tổng quan chương trình đào tạo

## Tinh thần chủ đạo

> "Ước Mơ lớn là khối động cơ (nhiên liệu); KPI, CRM và trí tuệ nhân tạo (AI) là hệ thống vô lăng và bánh xe. Không có ước mơ, sales sẽ gãy cánh trước áp lực thị trường. Không có công nghệ, sales sẽ làm việc vô hướng. Phải kết hợp cả hai."

## Phạm vi áp dụng

Đào tạo hội nhập nhân sự mới trong lĩnh vực kinh doanh, tư vấn và môi giới bất động sản.

## Định vị tài liệu

Sổ tay tư duy, kỹ năng, quy trình và công cụ vận hành trong 30–90 ngày đầu tiên.

## Cấu trúc chương trình

| Thành phần | Vai trò trong hành trình người mới | Nếu thiếu sẽ xảy ra điều gì |
|---|---|---|
| Ước Mơ | Tạo động cơ, lý do chịu khó, sức bền khi bị từ chối và khát vọng vượt khỏi vùng an nhàn | Dễ làm việc cầm chừng, nhanh nản, thiếu động lực vượt khó |
| KPI | Chuyển khát vọng thành chỉ số hành động có thể theo dõi hằng ngày và hằng tuần | Làm việc cảm tính, không biết mình đang tiến hay lùi |
| CRM | Lưu trữ khách hàng, kiểm soát đường ống cơ hội bán hàng, không bỏ sót theo dõi lại khách hàng và học từ dữ liệu | Mất khách, quên lịch, chăm sóc rời rạc, không nhìn thấy điểm nghẽn |
| AI | Hỗ trợ luyện tập, soạn nội dung, phân tích hội thoại, tăng tốc học nghề | Học chậm, làm thủ công nhiều, thiếu công cụ phản biện và cải tiến |
| Mentoring | Biến kinh nghiệm của người giỏi thành năng lực của người mới | Người mới tự bơi, sai lặp lại, đội nhóm không nhân bản được |

## Nguyên tắc đào tạo 2026

Người bán hàng giỏi không phải là người nói nhiều nhất, mà là người giữ được lửa lâu nhất, hiểu khách hàng rõ nhất, phản hồi đúng lúc nhất và giúp khách hàng ra quyết định tự tin nhất.

## Lộ trình tổng quan 30-60-90 ngày

| Giai đoạn | Trọng tâm | KPI chính |
|---|---|---|
| Ngày 1–30: Xây nền | Ước Mơ, sản phẩm, CRM, trình bày tư vấn ngắn, luyện tập tình huống | 15 cuộc gọi/ngày, 3 bài nội dung/tuần |
| Ngày 31–60: Thực chiến | Tự tạo nguồn khách, tăng khối lượng hoạt động, đi thực tế | 20 cuộc gọi/ngày, 2 lịch hẹn/tuần |
| Ngày 61–90: Tốc độ | Tối ưu đường ống cơ hội bán hàng, chốt giao dịch đầu tiên | 3 lịch hẹn/tuần, 1 giao dịch tiến triển/tháng |`,
    quiz: [
      { id: 1, question: "Tinh thần chủ đạo của chương trình đào tạo 2026 là gì?", options: ["Chỉ cần KPI cao là đủ", "Ước Mơ là động cơ, chỉ số hiệu suất chính (KPI), hệ thống quản trị quan hệ khách hàng (CRM) và trí tuệ nhân tạo (AI) là hệ thống vận hành — phải kết hợp cả hai", "Chỉ cần có ước mơ lớn", "Công nghệ sẽ thay thế hoàn toàn kỹ năng bán hàng"], correctAnswer: 1 },
      { id: 2, question: "Nếu thiếu CRM, điều gì sẽ xảy ra?", options: ["Không ảnh hưởng gì", "Mất khách, quên lịch, chăm sóc rời rạc", "Chỉ mất thời gian nhập liệu", "Khách hàng sẽ tự tìm đến"], correctAnswer: 1 },
      { id: 3, question: "Lộ trình đào tạo chia thành mấy giai đoạn?", options: ["2 giai đoạn", "3 giai đoạn (30-60-90 ngày)", "4 giai đoạn", "1 giai đoạn 90 ngày"], correctAnswer: 1 },
      { id: 4, question: "Vai trò của Mentoring trong hệ thống đào tạo là gì?", options: ["Thay thế tài liệu học", "Biến kinh nghiệm của người giỏi thành năng lực của người mới", "Chỉ để kiểm tra KPI", "Không quan trọng với người mới"], correctAnswer: 1 },
      { id: 5, question: "Giai đoạn 31-60 ngày có trọng tâm gì?", options: ["Học sản phẩm", "Tự tạo nguồn khách, tăng khối lượng hoạt động gọi, đi thực tế dự án", "Chỉ luyện tập tình huống", "Nghỉ ngơi và ôn tập"], correctAnswer: 1 },
    ]
  },
  {
    id: 2,
    title: "Ước Mơ & Động lực nghề nghiệp",
    shortDesc: "Khởi động động cơ nghề nghiệp",
    icon: "Rocket",
    accentColor: "#0d9488",
    content: `# Ước Mơ & Động lực nghề nghiệp

> "Ước Mơ lớn là điểm khởi đầu của mọi thành công trong nghề môi giới. Nó là lý do bạn chọn nghề này, là nhiên liệu giúp bạn vượt qua những ngày bị từ chối 20 lần liên tiếp, là ánh sáng cuối đường hầm khi thị trường khó khăn."

## Vì sao Ước Mơ quan trọng

Trước khi học sản phẩm, trước khi học kịch bản và trước khi mở CRM, nhân sự mới cần trả lời một câu hỏi rất quan trọng: **"Vì sao tôi chọn nghề này và tôi muốn dùng nghề này để thay đổi điều gì trong cuộc sống của mình?"**

Ước Mơ lớn không phải là khẩu hiệu treo tường. Ước Mơ lớn là năng lượng giúp người mới chịu được những ngày chưa có khách, những cuộc gọi bị từ chối, những buổi tư vấn chưa thành công và những lần phải sửa lại cách làm.

Tuy nhiên, bản 2026 nhấn mạnh rằng **Ước Mơ phải được quản trị**. Nếu Ước Mơ là động cơ, thì chỉ số hiệu suất chính (KPI) là đồng hồ tốc độ, hệ thống quản trị quan hệ khách hàng (CRM) là bản đồ hành trình, trí tuệ nhân tạo (AI) là trợ lý dẫn đường, còn mentoring là người huấn luyện ngồi cạnh để chỉnh tay lái.

## Bài tập Tuyên ngôn Ước Mơ

Viết 300–500 chữ trả lời:

- Tôi muốn đạt được gì trong 3 năm tới? (Thu nhập, vị trí, lối sống)
- Vì sao điều đó quan trọng với tôi và gia đình?
- Tôi cần trở thành phiên bản nào của mình để đạt được?
- Mỗi ngày tôi cần làm gì để tiến gần hơn?
- Mỗi tuần tôi đo lường bằng chỉ số nào?

## Bảng chuyển hóa Ước Mơ thành hành động

| Ước Mơ | Mục tiêu 12 tháng | Mục tiêu quý | Hành vi hằng ngày | Chỉ số đo tuần |
|---|---|---|---|---|
| Thu nhập 1 tỷ/năm | 84 triệu/tháng | 6 giao dịch/quý | 100 cuộc gọi + 2 lịch hẹn | Hội thoại chất lượng, lịch hẹn, tỷ lệ chuyển đổi |

## Câu hỏi khởi động

| Câu hỏi | Cách trả lời đúng tinh thần 2026 |
|---|---|
| Tôi muốn đạt điều gì trong 3 năm tới? | Viết thành hình ảnh cụ thể về thu nhập, năng lực, gia đình, vị thế nghề nghiệp và lối sống mong muốn |
| Vì sao điều đó quan trọng với tôi? | Gắn mục tiêu với lý do thật: trách nhiệm, tự do, gia đình, sự trưởng thành |
| Tôi cần trở thành ai để đạt được điều đó? | Chuyển từ mong muốn bên ngoài sang tiêu chuẩn con người: kỷ luật, chuyên nghiệp, học nhanh, giữ lời |
| Tôi sẽ làm gì mỗi ngày? | Chuyển Ước Mơ thành hành vi: học sản phẩm, tạo hội thoại, cập nhật hệ thống quản trị quan hệ khách hàng (CRM), theo dõi lại khách hàng, luyện tập tình huống |
| Tôi sẽ đo điều gì mỗi tuần? | Đo số hội thoại chất lượng, số lịch hẹn, tỷ lệ chuyển bước, số khách được chăm sóc lại |

## Nguyên tắc

> "Tôi giữ vững ước mơ lớn làm động cơ, đồng thời chuyển hóa nó thành mục tiêu rõ, kế hoạch cụ thể và thói quen đo lường hằng tuần."`,
    quiz: [
      { id: 1, question: "Bài tập bắt buộc trong ngày đầu tiên là gì?", options: ["Gọi 20 cuộc điện thoại", "Viết Tuyên ngôn Ước Mơ nghề nghiệp 300-500 chữ", "Học thuộc kịch bản bán hàng", "Nhập 50 khách vào hệ thống quản trị quan hệ khách hàng (CRM)"], correctAnswer: 1 },
      { id: 2, question: "Ước Mơ trong bản 2026 cần được quản trị bằng gì?", options: ["Chỉ cần viết ra giấy", "chỉ số hiệu suất chính (KPI), hệ thống quản trị quan hệ khách hàng (CRM), trí tuệ nhân tạo (AI) và kèm cặp chuyên môn", "Chỉ cần nói với sếp", "Không cần quản trị"], correctAnswer: 1 },
      { id: 3, question: "Nếu mục tiêu thu nhập 1 tỷ/năm, mục tiêu tháng là bao nhiêu?", options: ["50 triệu", "84 triệu", "35 triệu", "60 triệu"], correctAnswer: 1 },
      { id: 4, question: "Ước Mơ lớn đóng vai trò gì trong nghề môi giới?", options: ["Chỉ là khẩu hiệu", "Là năng lượng giúp vượt qua từ chối và khó khăn", "Không quan trọng bằng kỹ năng", "Chỉ cần trong tháng đầu"], correctAnswer: 1 },
      { id: 5, question: "Hành vi hằng ngày để đạt mục tiêu 6 giao dịch/quý gồm gì?", options: ["Chỉ cần đăng nội dung", "100 cuộc gọi + 2 lịch hẹn", "Chờ khách gọi đến", "Chỉ cần học sản phẩm"], correctAnswer: 1 },
    ]
  },
  {
    id: 3,
    title: "Chân dung nhân sự mới & Tư duy 2026",
    shortDesc: "Xây dựng tư duy đúng cho người mới",
    icon: "UserCheck",
    accentColor: "#0d9488",
    content: `# Chân dung nhân sự mới & Tư duy 2026

## Chuyển đổi tư duy

Nhân sự mới của năm 2026 không phải là người chỉ thuộc vài kịch bản, gọi thật nhiều rồi chờ may mắn. Chân dung đúng cần xây dựng là một người học nghề có hệ thống: có Ước Mơ đủ lớn, có thái độ cầu thị, có kỷ luật hành động, biết dùng công cụ và biết biến phản hồi của khách hàng thành bài học.

| Tư duy nền tảng | Tư duy 2026 |
|---|---|
| Tôi phải có ước mơ lớn | Tôi giữ vững ước mơ lớn làm động cơ, đồng thời chuyển hóa nó thành mục tiêu rõ, kế hoạch cụ thể và thói quen đo lường hằng tuần |
| Cố gắng hết sức là đủ | Nỗ lực phải đi kèm dữ liệu — đo lường để biết đang đúng hướng hay cần điều chỉnh |
| Kinh nghiệm sẽ đến theo thời gian | Kinh nghiệm được tăng tốc bằng luyện tập tình huống có phản hồi, AI hỗ trợ và mentor kèm cặp |
| Khách hàng sẽ tự đến nếu mình giỏi | Khách hàng đến từ hệ thống tạo nguồn chủ động + thương hiệu cá nhân + nuôi dưỡng khách hàng qua hệ thống quản trị quan hệ khách hàng (CRM) |
| Tôi phải thuyết phục khách hàng | Tôi phải hiểu nhu cầu, làm rõ vấn đề, tư vấn bằng sự chân thành và đề xuất lựa chọn phù hợp |

## Bảng năng lực nền

| Năng lực | Hành vi quan sát được | Tiêu chuẩn 30 ngày đầu |
|---|---|---|
| Kỷ luật thời gian | Đến đúng giờ, hoàn thành task đúng deadline | 100% tuân thủ lịch đào tạo |
| Chủ động học | Tự đọc tài liệu, hỏi mentor, ghi chép | Hoàn thành 100% module bắt buộc |
| Chịu áp lực | Không bỏ cuộc khi bị từ chối | Duy trì KPI gọi điện dù tỷ lệ từ chối cao |
| Trung thực | Báo cáo đúng số liệu, nhận lỗi khi sai | Không có sai lệch dữ liệu CRM |
| Động cơ nghề nghiệp | Có bản tuyên ngôn Ước Mơ và cam kết 90 ngày | Trình bày được lý do chọn nghề trong 2 phút |
| Giao tiếp | Biết xin phép, đặt câu hỏi, tóm tắt nhu cầu | Đạt luyện tập tình huống mở đầu và khám phá nhu cầu từ 3,5/5 |

## Điều quan trọng nhất trong 90 ngày đầu

Trong 90 ngày đầu, điều quan trọng nhất không phải là chứng minh mình giỏi ngay lập tức. Điều quan trọng nhất là **hình thành nền tảng đúng**: đi làm đúng nhịp, học sản phẩm, luyện hội thoại, dùng CRM, chăm sóc khách hàng và tiếp nhận phản hồi. Người mới được kỳ vọng có nhiệt huyết, nhưng nhiệt huyết phải thể hiện bằng hành động cụ thể, không chỉ bằng lời nói.`,
    quiz: [
      { id: 1, question: "Tư duy 2026 về việc 'gọi thật nhiều' được chuyển đổi thành gì?", options: ["Gọi càng nhiều càng tốt", "Tạo đủ số lượng hội thoại chất lượng, ghi nhận dữ liệu đúng và theo dõi đến cùng", "Không cần gọi nữa, chỉ cần đăng nội dung", "Chờ khách gọi đến"], correctAnswer: 1 },
      { id: 2, question: "Tiêu chuẩn 30 ngày đầu cho năng lực 'Chủ động học' là gì?", options: ["Đọc 1 cuốn sách", "Hoàn thành 100% module bắt buộc", "Chỉ cần đi đào tạo đầy đủ", "Hỏi mentor 1 lần/tuần"], correctAnswer: 1 },
      { id: 3, question: "Theo tư duy 2026, khách hàng đến từ đâu?", options: ["Tự đến nếu mình giỏi", "Hệ thống tạo nguồn chủ động + thương hiệu cá nhân + nuôi dưỡng khách hàng qua hệ thống quản trị quan hệ khách hàng (CRM)", "Chỉ từ quảng cáo công ty", "Chỉ từ giới thiệu khách hàng"], correctAnswer: 1 },
      { id: 4, question: "Điều quan trọng nhất trong 90 ngày đầu là gì?", options: ["Chốt được nhiều giao dịch nhất", "Hình thành nền tảng đúng: nhịp làm việc, kỹ năng, CRM", "Tuyển thêm người mới", "Có thu nhập cao nhất team"], correctAnswer: 1 },
      { id: 5, question: "Năng lực 'Trung thực' được đo bằng tiêu chuẩn nào?", options: ["Nói thật với khách hàng", "Không có sai lệch dữ liệu CRM", "Không nói xấu đồng nghiệp", "Đến đúng giờ"], correctAnswer: 1 },
    ]
  },
  {
    id: 4,
    title: "7 Năng lực lõi",
    shortDesc: "Khung năng lực nền cho 90 ngày đầu",
    icon: "Target",
    accentColor: "#2563eb",
    content: `# 7 Năng lực lõi của nhân sự kinh doanh 2026

Thay vì chỉ dùng các khẩu hiệu tạo động lực, đào tạo 2026 cần chuyển thành năng lực có thể quan sát, luyện tập và đánh giá. Bảy năng lực lõi dưới đây là khung năng lực nền cho 90 ngày đầu.

## 1. Tư duy nghề nghiệp
- **Mô tả**: Hiểu bản chất nghề môi giới là nghề phục vụ, không phải nghề "bán"
- **Biểu hiện đạt**: Không phàn nàn khi bị từ chối, biết ghi nhận bài học sau mỗi tương tác
- **Cách đo**: Nhật ký phản hồi sau mỗi cuộc gọi/tư vấn

## 2. Động cơ & Kỷ luật
- **Mô tả**: Ước Mơ là nhiên liệu, kỷ luật hằng ngày là đường ray
- **Biểu hiện đạt**: Có mục tiêu tuần, báo cáo ngày và cam kết cải tiến rõ ràng
- **Cách đo**: Tỷ lệ hoàn thành KPI tuần, số ngày báo cáo đúng hạn

## 3. Hiểu sản phẩm
- **Mô tả**: Nắm vững pháp lý, quy hoạch, tiện ích, giá trị đầu tư của từng dự án
- **Biểu hiện đạt**: Trình bày được sản phẩm trong 60 giây, 3 phút và 10 phút theo từng nhóm khách
- **Cách đo**: Điểm luyện tập tình huống trình bày tư vấn ngắn sản phẩm

## 4. Hiểu khách hàng
- **Mô tả**: Phân loại nhu cầu (ở thực/đầu tư/tích sản), ngân sách, timeline, nỗi lo
- **Biểu hiện đạt**: Không tư vấn ngay khi chưa đặt câu hỏi; luôn có ghi chú nhu cầu trong CRM
- **Cách đo**: Tỷ lệ khách có ghi chú nhu cầu đầy đủ trong CRM

## 5. Giao tiếp đa kênh
- **Mô tả**: Gọi điện, nhắn tin, gặp trực tiếp, MXH — mỗi kênh có ngôn ngữ riêng
- **Biểu hiện đạt**: Có kịch bản phù hợp cho từng kênh, không gửi thông tin máy móc
- **Cách đo**: Tỷ lệ phản hồi tích cực trên từng kênh

## 6. Tư vấn & Xử lý do dự
- **Mô tả**: Dẫn dắt bằng câu hỏi, xử lý từ chối bằng đồng cảm + dữ liệu
- **Biểu hiện đạt**: Không tranh luận thắng thua; luôn tóm tắt lại nhu cầu và hành động kế tiếp
- **Cách đo**: Điểm luyện tập tình huống xử lý từ chối, tỷ lệ chuyển bước trong đường ống cơ hội bán hàng

## 7. Tự học bằng dữ liệu
- **Mô tả**: Đọc báo cáo CRM, phân tích tỷ lệ chuyển đổi, tự cải tiến
- **Biểu hiện đạt**: Có nhật ký học tập, tự đánh giá kịch bản và đề xuất cải tiến mỗi tuần
- **Cách đo**: Số insight ghi nhận/tuần, chất lượng đề xuất cải tiến

## Bảng tổng hợp

| Năng lực lõi | Mô tả | Biểu hiện đạt yêu cầu |
|---|---|---|
| Tư duy nghề nghiệp | Hiểu rằng kinh doanh BĐS là nghề xây dựng niềm tin qua thời gian | Không phàn nàn khi bị từ chối, biết ghi nhận bài học |
| Động cơ và kỷ luật | Giữ Ước Mơ làm động cơ, biến động cơ thành kế hoạch hành động | Có mục tiêu tuần, báo cáo ngày, cam kết cải tiến |
| Hiểu sản phẩm | Nắm điểm mạnh, điểm yếu, nhóm khách phù hợp | Trình bày tư vấn ngắn được sản phẩm trong 60s, 3 phút, 10 phút |
| Hiểu khách hàng | Phân loại nhu cầu, động cơ mua, khả năng tài chính | Luôn có ghi chú nhu cầu trong CRM |
| Giao tiếp đa kênh | Kết hợp gọi điện, nhắn tin, email, MXH, gặp trực tiếp | Có kịch bản phù hợp cho từng kênh |
| Tư vấn và xử lý do dự | Giúp khách so sánh lựa chọn, làm rõ băn khoăn | Không tranh luận; luôn tóm tắt nhu cầu + bước tiếp |
| Tự học bằng dữ liệu | Nhìn vào số liệu hoạt động để cải tiến | Có nhật ký học tập, đề xuất cải tiến mỗi tuần |

## Vòng lặp phát triển năng lực

**Học khung → Xem mẫu → Làm thử → Nhận phản hồi → Sửa kịch bản → Làm lại → Đo kết quả**

Mỗi năng lực có: Mô tả → Hành vi cụ thể → Cách đo lường → Bài tập thực hành.`,
    quiz: [
      { id: 1, question: "Năng lực 'Tư duy nghề nghiệp' yêu cầu hiểu điều gì?", options: ["Nghề bán hàng là nghề nói nhiều", "Kinh doanh BĐS là nghề xây dựng niềm tin qua thời gian", "Chỉ cần chốt giao dịch nhanh", "Nghề này dễ kiếm tiền"], correctAnswer: 1 },
      { id: 2, question: "Vòng lặp phát triển năng lực gồm mấy bước?", options: ["3 bước", "5 bước", "7 bước: Học khung → Xem mẫu → Làm thử → Nhận phản hồi → Sửa kịch bản → Làm lại → Đo kết quả", "10 bước"], correctAnswer: 2 },
      { id: 3, question: "Năng lực 'Hiểu khách hàng' yêu cầu phân loại gì?", options: ["Chỉ phân loại theo thu nhập", "Nhu cầu (ở thực/đầu tư/tích sản), ngân sách, timeline, nỗi lo", "Chỉ phân loại theo khu vực", "Chỉ phân loại theo độ tuổi"], correctAnswer: 1 },
      { id: 4, question: "Biểu hiện đạt yêu cầu của 'Hiểu sản phẩm' là gì?", options: ["Đọc hết brochure", "Trình bày được sản phẩm trong 60 giây, 3 phút và 10 phút", "Nhớ hết giá bán", "Biết tên tất cả dự án"], correctAnswer: 1 },
      { id: 5, question: "Năng lực 'Tự học bằng dữ liệu' đo bằng gì?", options: ["Số sách đọc/tháng", "Số insight ghi nhận/tuần và chất lượng đề xuất cải tiến", "Số giờ học online", "Số buổi đào tạo tham gia"], correctAnswer: 1 },
    ]
  },
  {
    id: 5,
    title: "Lộ trình 30-60-90 ngày",
    shortDesc: "Chi tiết từng giai đoạn phát triển",
    icon: "Route",
    accentColor: "#2563eb",
    content: `# Lộ trình 30-60-90 ngày

Một lỗi phổ biến trong đào tạo nhân sự mới là đưa quá nhiều nội dung ngay từ đầu nhưng thiếu lộ trình kiểm tra. Người mới thường không thất bại vì thiếu tài liệu; họ thất bại vì không biết tuần này phải ưu tiên điều gì.

## Giai đoạn 1 (Ngày 1–30): NỀN TẢNG

### Tuần 1–2
- Học sản phẩm, học hệ thống quản trị quan hệ khách hàng (CRM), hoàn thành hồ sơ mạng xã hội
- Viết Tuyên ngôn Ước Mơ
- Luyện trình bày tư vấn ngắn cá nhân và trình bày tư vấn ngắn sản phẩm

### Tuần 3–4
- Bắt đầu gọi điện (data công ty)
- Luyện tập tình huống hằng ngày
- Đăng nội dung đầu tiên

### KPI Giai đoạn 1
- 15 cuộc gọi/ngày
- 3 bài nội dung/tuần
- 100% module học hoàn thành

## Giai đoạn 2 (Ngày 31–60): THỰC CHIẾN

### Tuần 5–6
- Tự tạo nguồn khách
- Tăng khối lượng hoạt động gọi
- Đi thực tế dự án

### Tuần 7–8
- Có lịch hẹn đầu tiên từ nguồn tự tạo
- Luyện xử lý từ chối thực tế

### KPI Giai đoạn 2
- 20 cuộc gọi/ngày
- 2 lịch hẹn/tuần
- 5 bài nội dung/tuần
- CRM cập nhật 100%

## Giai đoạn 3 (Ngày 61–90): TỐC ĐỘ

### Tuần 9–10
- Tối ưu đường ống cơ hội bán hàng
- Chốt giao dịch đầu tiên (hoặc tiến rất gần)

### Tuần 11–12
- Bắt đầu nhận giới thiệu khách hàng
- Nội dung có tương tác ổn định
- Tự quản lý thời gian

### KPI Giai đoạn 3
- 3 lịch hẹn/tuần
- 1 giao dịch tiến triển/tháng
- 7 bài nội dung/tuần
- Tự mentor được 1 kỹ năng

## Bảng tổng hợp lộ trình

| Giai đoạn | Trọng tâm | Sản phẩm đầu ra | Tiêu chuẩn chuyển giai đoạn |
|---|---|---|---|
| Ngày 1–30: Xây nền | Ước Mơ, sản phẩm, CRM, trình bày tư vấn ngắn, luyện tập tình huống | Tuyên ngôn Ước Mơ, trình bày tư vấn ngắn cá nhân, hồ sơ khách hàng mẫu trên hệ thống quản trị quan hệ khách hàng (CRM) | Đi làm đúng nhịp, dùng được hệ thống quản trị quan hệ khách hàng (CRM), đạt luyện tập tình huống cơ bản |
| Ngày 31–60: Thực chiến | Tạo nguồn, tăng khối lượng hoạt động, đi thực tế | Lịch hẹn từ nguồn tự tạo, báo cáo tuần | Có khách tự tạo, xử lý được từ chối cơ bản |
| Ngày 61–90: Tốc độ | Tối ưu đường ống cơ hội bán hàng, chốt giao dịch | Giao dịch tiến triển, nội dung ổn định | Tự vận hành được, bắt đầu mentor người khác |`,
    quiz: [
      { id: 1, question: "Tuần 1-2 cần hoàn thành những gì?", options: ["Gọi 50 cuộc/ngày", "Học sản phẩm, học hệ thống quản trị quan hệ khách hàng (CRM), hoàn thành hồ sơ mạng xã hội, viết Tuyên ngôn Ước Mơ", "Chốt giao dịch đầu tiên", "Tự tạo nguồn khách"], correctAnswer: 1 },
      { id: 2, question: "KPI gọi điện giai đoạn 2 (ngày 31-60) là bao nhiêu?", options: ["10 cuộc/ngày", "15 cuộc/ngày", "20 cuộc/ngày", "30 cuộc/ngày"], correctAnswer: 2 },
      { id: 3, question: "Giai đoạn 3 có mục tiêu nội dung bao nhiêu bài/tuần?", options: ["3 bài", "5 bài", "7 bài", "10 bài"], correctAnswer: 2 },
      { id: 4, question: "Khi nào bắt đầu tự tạo nguồn khách?", options: ["Ngay tuần 1", "Từ tuần 5-6 (giai đoạn 2)", "Từ tháng 3", "Sau khi có giao dịch đầu tiên"], correctAnswer: 1 },
      { id: 5, question: "Tiêu chuẩn chuyển từ giai đoạn 2 sang giai đoạn 3 là gì?", options: ["Chốt được 3 giao dịch", "Có khách tự tạo, xử lý được từ chối cơ bản", "Thu nhập đạt 30 triệu/tháng", "Tuyển được 2 người mới"], correctAnswer: 1 },
    ]
  },
  {
    id: 6,
    title: "Sản phẩm & Thị trường",
    shortDesc: "Hiểu sản phẩm, pháp lý, thị trường",
    icon: "Building2",
    accentColor: "#2563eb",
    content: `# Sản phẩm & Thị trường

## Tổng quan

Hiểu sản phẩm không chỉ là thuộc lòng thông số kỹ thuật. Hiểu sản phẩm theo hướng tư vấn nghĩa là biết sản phẩm này phù hợp với ai, giải quyết vấn đề gì và tạo giá trị gì cho khách hàng.

## Nội dung cần nắm vững

### 1. Tổng quan các dự án đang bán

| Tiêu chí | Nội dung cần nắm |
|---|---|
| Vị trí | Quận/huyện, kết nối giao thông, tiện ích xung quanh |
| Giá | Giá bán, chính sách thanh toán, ưu đãi |
| Pháp lý | Sổ hồng/sổ đỏ, giấy phép xây dựng, quy hoạch |
| Tiến độ | Giai đoạn xây dựng, dự kiến bàn giao |
| USP | Điểm khác biệt so với đối thủ cùng khu vực |

### 2. Cách đọc hiểu pháp lý dự án

- **Sổ hồng (Giấy chứng nhận quyền sử dụng đất)**: Xác nhận quyền sở hữu hợp pháp
- **Giấy phép xây dựng**: Cho phép triển khai thi công
- **Quy hoạch 1/500**: Bản vẽ chi tiết mặt bằng tổng thể dự án
- **Chấp thuận đầu tư**: Văn bản từ UBND tỉnh/thành phố

### 3. Phân tích thị trường khu vực

- Giá trung bình m² theo khu vực
- Xu hướng tăng/giảm 6-12 tháng gần nhất
- Đối thủ cạnh tranh trực tiếp
- Hạ tầng sắp triển khai (metro, đường cao tốc, trung tâm thương mại)

### 4. Cách trả lời câu hỏi khách về pháp lý, tiến độ, giá

> Nguyên tắc: Trả lời trung thực, có dẫn chứng. Nếu không biết, hẹn xác nhận lại trong 24h. Không bịa thông tin.

### 5. Bài tập thực hành

**Thuyết trình 5 phút về 1 dự án** (quay video nộp mentor):
- Giới thiệu tổng quan (1 phút)
- Điểm mạnh và USP (1.5 phút)
- Nhóm khách phù hợp (1 phút)
- So sánh với đối thủ (1 phút)
- Chính sách và call-to-action (0.5 phút)`,
    quiz: [
      { id: 1, question: "Hiểu sản phẩm theo hướng tư vấn nghĩa là gì?", options: ["Thuộc lòng brochure", "Biết sản phẩm phù hợp với ai, giải quyết vấn đề gì, tạo giá trị gì", "Biết giá bán chính xác", "Biết tên chủ đầu tư"], correctAnswer: 1 },
      { id: 2, question: "Quy hoạch 1/500 là gì?", options: ["Bản đồ khu vực", "Bản vẽ chi tiết mặt bằng tổng thể dự án", "Giấy phép xây dựng", "Hợp đồng mua bán"], correctAnswer: 1 },
      { id: 3, question: "Khi không biết câu trả lời cho khách, nên làm gì?", options: ["Bịa thông tin cho khách yên tâm", "Hẹn xác nhận lại trong 24h, không bịa thông tin", "Nói 'em không biết' rồi im lặng", "Chuyển khách cho người khác"], correctAnswer: 1 },
      { id: 4, question: "Bài tập trình bày tư vấn ngắn sản phẩm yêu cầu thời lượng bao lâu?", options: ["1 phút", "3 phút", "5 phút", "10 phút"], correctAnswer: 2 },
      { id: 5, question: "USP của dự án nghĩa là gì?", options: ["Giá bán", "Điểm khác biệt so với đối thủ cùng khu vực", "Diện tích căn hộ", "Số tầng tòa nhà"], correctAnswer: 1 },
    ]
  },
  {
    id: 7,
    title: "Tìm kiếm & Tạo nguồn khách hàng",
    shortDesc: "Bản đồ nguồn khách, quy trình tạo nguồn",
    icon: "Search",
    accentColor: "#059669",
    content: `# Tìm kiếm & Tạo nguồn khách hàng

## Vì sao đây là chương sống còn với nhân sự mới

Trong nghề môi giới bất động sản, kỹ năng bán hàng giỏi đến mấy cũng vô nghĩa nếu không có khách hàng để tư vấn. Nguyên nhân số 1 khiến nhân sự mới bỏ nghề trong 60 ngày đầu không phải vì họ không biết nói, mà vì họ **không có ai để nói**.

> Tinh thần 2026: Ước Mơ cho bạn lý do để kiên trì, nhưng nguồn khách cho bạn cơ hội để thực hành. Không có nguồn khách, mọi kỹ năng chỉ là lý thuyết trên giấy.

## Bản đồ nguồn khách hàng

| Nguồn | Mô tả | Phù hợp người mới | Hành động |
|---|---|---|---|
| Data công ty | Danh sách từ marketing/quảng cáo | Rất phù hợp — nguồn chính tháng đầu | Gọi theo kịch bản, phân loại, nhập CRM |
| Giới thiệu khách hàng | Giới thiệu từ người quen, khách cũ | Cao — tỷ lệ chuyển đổi tốt nhất | Chủ động xin giới thiệu sau mỗi tương tác tốt |
| MXH cá nhân | Facebook, Zalo, TikTok | Rất phù hợp — miễn phí | Đăng nội dung giá trị, tương tác, nhắn tin cá nhân hóa |
| Sự kiện/Open house | Mở bán, tham quan, hội thảo | Phù hợp — gặp trực tiếp | Đến sớm, thu thập info, theo dõi lại khách hàng 24h |
| Cộng đồng/Hội nhóm | Nhóm FB, Zalo về BĐS khu vực | Phù hợp — cần kiên nhẫn | Chia sẻ kiến thức, không spam |
| Farming khu vực | Chuyên gia 1-2 khu vực cụ thể | Từ tháng 2 | Khảo sát, quay video, nắm giá |
| Đối tác liên kết | Ngân hàng, nội thất, luật sư | Nâng cao — từ tháng 3 | Gặp gỡ, trao đổi giá trị, giới thiệu qua lại |

## Quy trình tạo nguồn khách hằng tuần

### Bước 1: Xác định mục tiêu nguồn khách tuần
Nhân sự mới cần có KPI tạo nguồn rõ ràng. Ví dụ: tuần này cần tạo được 15 khách mới vào đường ống cơ hội bán hàng.

### Bước 2: Phân bổ thời gian theo nguồn

| Giai đoạn | Data công ty | MXH & Nội dung | Giới thiệu khách hàng | Sự kiện |
|---|---|---|---|---|
| Tuần 1–4 | 60% | 20% | 10% | 10% |
| Tuần 5–8 | 40% | 30% | 15% | 15% |
| Tuần 9–12 | 30% | 30% | 25% | 15% |

### Bước 3: Hành động cụ thể mỗi ngày
Mỗi ngày thực hiện ít nhất 3 hành động tạo nguồn:
- Gọi/nhắn cho khách từ data công ty (15–20 cuộc/ngày tháng đầu)
- Đăng 1 nội dung giá trị trên MXH cá nhân
- Tương tác có chủ đích trong 2–3 nhóm/cộng đồng

### Bước 4: Nhập CRM ngay lập tức
Mọi khách hàng tiềm năng phải được nhập CRM trong vòng 2 giờ. Ghi rõ: nguồn, nhu cầu sơ bộ, bước tiếp theo, ngày theo dõi lại khách hàng.

### Bước 5: Đo lường và cải tiến
Cuối tuần review: nguồn nào cho khách chất lượng nhất? Điều chỉnh phân bổ thời gian cho tuần sau.

## Kỹ năng tiếp cận khách hàng mới (Cold Outreach)

> Nguyên tắc vàng: Không ai muốn bị bán hàng, nhưng ai cũng muốn được giúp đỡ. Tiếp cận bằng giá trị, không tiếp cận bằng sản phẩm.

| Sai | Đúng |
|---|---|
| "Em có dự án rất tốt, anh/chị xem giúp em nhé!" | "Em thấy anh/chị đang quan tâm khu vực X, em có thông tin thị trường mới nhất, anh/chị muốn em gửi không ạ?" |
| Gửi brochure ngay lần đầu tiên | Hỏi nhu cầu trước, gửi thông tin phù hợp sau |
| Gọi liên tục khi khách chưa phản hồi | Đa kênh: gọi → nhắn tin → gửi nội dung giá trị → gọi lại sau 3 ngày |

## Công thức tiếp cận lạnh 3V

1. **Value first** — Chia sẻ giá trị trước khi giới thiệu sản phẩm
2. **Validate** — Xác nhận nhu cầu bằng câu hỏi
3. **Volunteer** — Đề xuất bước tiếp theo nhẹ nhàng

## KPI tạo nguồn

| Chỉ số | Tuần 1–4 | Tuần 5–8 | Tuần 9–12 |
|---|---|---|---|
| Khách mới vào đường ống cơ hội bán hàng/tuần | 10–15 | 15–20 | 20–25 |
| Cuộc gọi tiếp cận mới/ngày | 15–20 | 20–25 | 15–20 |
| Bài đăng MXH/tuần | 3–5 | 5–7 | 5–7 |
| Lịch hẹn từ nguồn tự tạo/tuần | 1–2 | 2–3 | 3–5 |
| Tỷ lệ khách phản hồi tích cực | >15% | >20% | >25% |`,
    quiz: [
      { id: 1, question: "Nguyên nhân số 1 khiến nhân sự mới bỏ nghề trong 60 ngày đầu là gì?", options: ["Không biết nói", "Không có khách hàng để tư vấn", "Lương thấp", "Sếp khó tính"], correctAnswer: 1 },
      { id: 2, question: "Công thức tiếp cận lạnh 3V gồm những gì?", options: ["Vision, Victory, Value", "Value first, Validate, Volunteer", "Verify, Validate, Visualize", "Voice, Video, Virtual"], correctAnswer: 1 },
      { id: 3, question: "Trong tuần 1-4, phân bổ thời gian cho Data công ty là bao nhiêu?", options: ["30%", "40%", "60%", "80%"], correctAnswer: 2 },
      { id: 4, question: "Khách hàng tiềm năng phải được nhập CRM trong bao lâu?", options: ["24 giờ", "2 giờ", "1 tuần", "Cuối ngày"], correctAnswer: 1 },
      { id: 5, question: "Nguồn khách nào có tỷ lệ chuyển đổi cao nhất?", options: ["Data công ty", "MXH cá nhân", "Giới thiệu khách hàng (giới thiệu)", "Cộng đồng/Hội nhóm"], correctAnswer: 2 },
      { id: 6, question: "Farming khu vực phù hợp từ thời điểm nào?", options: ["Ngay tuần 1", "Từ tháng 2", "Từ tháng 6", "Sau 1 năm"], correctAnswer: 1 },
      { id: 7, question: "KPI lịch hẹn từ nguồn tự tạo tuần 9-12 là bao nhiêu?", options: ["1-2/tuần", "2-3/tuần", "3-5/tuần", "5-7/tuần"], correctAnswer: 2 },
    ]
  },
  {
    id: 8,
    title: "7 Bước bán hàng",
    shortDesc: "Quy trình tư vấn chuyên nghiệp",
    icon: "ListOrdered",
    accentColor: "#d97706",
    content: `# 7 Bước bán hàng (Quy trình tư vấn)

> **Tinh thần cốt lõi**: "Nhiệt huyết của bạn còn quan trọng hơn gấp nhiều lần kỹ năng thuyết trình. Khách hàng mua vì họ cảm nhận được sự chân thành và năng lượng tích cực của bạn."

## Bước 1: Tiếp cận
- **Mục tiêu**: Tạo ấn tượng đầu tiên, xây dựng rapport
- **Câu nói mẫu**: "Chào anh/chị, em là [Tên] từ [Công ty]. Em được biết anh/chị đang quan tâm đến BĐS khu vực [X], em có thể chia sẻ một số thông tin hữu ích không ạ?"
- **Lỗi thường gặp**: Nói quá nhiều về bản thân, không hỏi khách
- **Bài tập**: Luyện tập tình huống mở đầu cuộc gọi 30 giây

## Bước 2: Khám phá nhu cầu
- **Mục tiêu**: Đặt câu hỏi mở, lắng nghe chủ động, ghi nhận
- **Câu hỏi mẫu**: "Anh/chị đang tìm kiếm BĐS cho mục đích ở hay đầu tư ạ?", "Ngân sách anh/chị đang cân nhắc trong khoảng nào?", "Thời điểm anh/chị muốn sở hữu là khi nào?"
- **Lỗi thường gặp**: Tư vấn ngay khi chưa hiểu nhu cầu
- **Bài tập**: Luyện tập tình huống khám phá nhu cầu 3 phút

## Bước 3: Tư vấn giải pháp
- **Mục tiêu**: Trình bày sản phẩm phù hợp nhu cầu (không phải sản phẩm tốt nhất)
- **Nguyên tắc**: Kết nối từng đặc điểm sản phẩm với nhu cầu đã khám phá
- **Lỗi thường gặp**: Liệt kê tất cả ưu điểm mà không liên quan đến khách
- **Bài tập**: Trình bày tư vấn ngắn 5 phút có gắn nhu cầu khách

## Bước 4: Xử lý do dự
- **Mục tiêu**: Dùng công thức "Cảm thấy – Đã cảm thấy – Đã tìm ra"
- **Ví dụ**: "Em hiểu anh/chị cảm thấy giá hơi cao. Nhiều khách hàng ban đầu cũng đã cảm thấy như vậy. Nhưng sau khi tìm hiểu kỹ về pháp lý và tiềm năng tăng giá, họ đã tìm ra rằng đây là mức giá hợp lý."
- **Lỗi thường gặp**: Tranh luận với khách, phủ nhận cảm xúc
- **Bài tập**: Luyện tập tình huống xử lý 5 tình huống từ chối phổ biến

## Bước 5: Chốt cam kết
- **Mục tiêu**: Tạo urgency nhẹ nhàng, đề xuất bước tiếp theo rõ ràng
- **Câu nói mẫu**: "Với những gì mình đã trao đổi, em nghĩ bước tiếp theo phù hợp là mình sắp xếp một buổi tham quan thực tế vào cuối tuần này, anh/chị thấy sao ạ?"
- **Lỗi thường gặp**: Không dám đề xuất, để khách tự quyết định
- **Bài tập**: Luyện 5 cách chốt cam kết khác nhau

## Bước 6: Theo dõi lại khách hàng
- **Mục tiêu**: Liên hệ lại trong 24h, cung cấp thêm giá trị
- **Hành động**: Gửi tóm tắt buổi tư vấn, tài liệu bổ sung, lịch hẹn tiếp theo
- **Lỗi thường gặp**: Quên theo dõi lại khách hàng, theo dõi lại khách hàng quá muộn
- **Bài tập**: Soạn 3 mẫu tin nhắn theo dõi lại khách hàng cho 3 tình huống

## Bước 7: Chăm sóc sau giao dịch
- **Mục tiêu**: Duy trì quan hệ, xin giới thiệu khách hàng, upsell
- **Hành động**: Chúc mừng, hỏi thăm định kỳ, chia sẻ thông tin hữu ích
- **Lỗi thường gặp**: Bỏ quên khách sau khi chốt giao dịch
- **Bài tập**: Lập kế hoạch chăm sóc 3 tháng sau giao dịch

## Tóm tắt

Mỗi bước có: **Mục tiêu → Câu nói mẫu → Lỗi thường gặp → Bài tập luyện tập tình huống**`,
    quiz: [
      { id: 1, question: "Tinh thần cốt lõi của quy trình bán hàng là gì?", options: ["Kỹ năng thuyết trình là quan trọng nhất", "Nhiệt huyết và sự chân thành quan trọng hơn kỹ năng thuyết trình", "Chốt giao dịch nhanh nhất có thể", "Nói càng nhiều càng tốt"], correctAnswer: 1 },
      { id: 2, question: "Công thức xử lý do dự là gì?", options: ["Hỏi – Trả lời – Chốt", "Cảm thấy – Đã cảm thấy – Đã tìm ra (Feel-Felt-Found)", "Nghe – Hiểu – Giải thích", "Đồng ý – Phản bác – Thuyết phục"], correctAnswer: 1 },
      { id: 3, question: "Bước 2 'Khám phá nhu cầu' yêu cầu gì?", options: ["Giới thiệu sản phẩm ngay", "Đặt câu hỏi mở, lắng nghe chủ động, ghi nhận", "Gửi brochure", "Nói về giá"], correctAnswer: 1 },
      { id: 4, question: "Theo dõi lại khách hàng cần thực hiện trong bao lâu sau buổi tư vấn?", options: ["1 tuần", "3 ngày", "24 giờ", "1 tháng"], correctAnswer: 2 },
      { id: 5, question: "Lỗi thường gặp ở bước 'Chốt cam kết' là gì?", options: ["Ép khách mua ngay", "Không dám đề xuất, để khách tự quyết định", "Nói quá nhiều về giá", "Gọi lại quá nhiều lần"], correctAnswer: 1 },
    ]
  },
];
