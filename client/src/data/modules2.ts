import { Module } from './modules';

export const modules2: Module[] = [
  {
    id: 9,
    title: "Kịch bản & Xử lý từ chối",
    shortDesc: "Công thức Feel-Felt-Found và kịch bản mẫu",
    icon: "MessageSquare",
    accentColor: "#d97706",
    content: `# Kịch bản & Xử lý từ chối

## Công thức "Cảm thấy – Đã cảm thấy – Đã tìm ra" (Feel – Felt – Found)

> "Em hiểu anh/chị **cảm thấy** giá hơi cao so với ngân sách. Thực tế nhiều khách hàng của em ban đầu cũng **đã cảm thấy** như vậy. Nhưng sau khi tìm hiểu kỹ về pháp lý hoàn chỉnh và tiềm năng tăng giá khu vực, họ **đã tìm ra** rằng đây thực sự là mức giá hợp lý cho giá trị nhận được."

## Bảng kịch bản xử lý từ chối phổ biến

| Từ chối | Nguyên nhân thật | Kịch bản xử lý |
|---|---|---|
| "Để tôi suy nghĩ thêm" | Chưa đủ thông tin hoặc chưa tin tưởng | "Anh/chị đang cân nhắc điều gì cụ thể? Em có thể hỗ trợ thêm thông tin." |
| "Giá cao quá" | Chưa thấy giá trị tương xứng | Dùng Feel-Felt-Found + so sánh giá trị dài hạn |
| "Tôi cần hỏi ý kiến vợ/chồng" | Có thể đúng, có thể là cách từ chối | "Dạ, quyết định lớn nên bàn cùng gia đình là đúng. Anh/chị muốn em gửi tài liệu để cả hai cùng xem, hay em sắp xếp buổi gặp cả hai ạ?" |
| "Tôi chưa có nhu cầu" | Chưa nhận ra nhu cầu hoặc chưa đúng thời điểm | "Dạ em hiểu. Vậy em xin phép gửi anh/chị một số thông tin thị trường khu vực này để tham khảo, khi nào có nhu cầu anh/chị nhớ đến em nhé." |
| "Tôi đã có người tư vấn rồi" | Đang làm việc với đối thủ | "Dạ tuyệt vời. Em chỉ muốn chia sẻ thêm một góc nhìn khác về [điểm khác biệt]. Anh/chị có thể so sánh để chọn phương án tốt nhất." |

## Kịch bản mở đầu cuộc gọi lần đầu

**Mục tiêu**: Xin phép thời gian, tạo lý do nghe tiếp, không bán hàng ngay.

> "Dạ chào anh/chị [Tên], em là [Tên mình] bên [Công ty]. Em gọi vì thấy anh/chị có để lại thông tin quan tâm đến BĐS khu vực [X]. Em có một vài thông tin thị trường mới nhất muốn chia sẻ, anh/chị có tiện nghe em 2 phút không ạ?"

## Kịch bản đặt lịch hẹn

> "Dựa trên những gì mình trao đổi, em nghĩ cách tốt nhất để anh/chị đánh giá là mình đi xem thực tế. Em có thể sắp xếp vào sáng thứ 7 hoặc chiều chủ nhật tuần này, anh/chị thấy khung nào tiện hơn ạ?"

## Kịch bản khách yêu cầu gửi tài liệu trước

> "Dạ em gửi ngay ạ. Để em gửi đúng thông tin anh/chị cần, em hỏi nhanh: anh/chị đang quan tâm loại hình nào — căn hộ hay nhà phố? Và ngân sách anh/chị đang cân nhắc khoảng bao nhiêu ạ?"

## Kịch bản xin giới thiệu (Giới thiệu khách hàng)

> "Anh/chị ơi, em rất vui vì mình đã hỗ trợ anh/chị tốt trong quá trình vừa rồi. Nếu anh/chị có ai quen đang tìm hiểu BĐS, anh/chị giới thiệu giúp em nhé. Em cam kết sẽ tư vấn tận tâm như đã phục vụ anh/chị."`,
    quiz: [
      { id: 1, question: "Công thức Feel-Felt-Found gồm 3 bước nào?", options: ["Hỏi – Nghe – Đáp", "Cảm thấy – Đã cảm thấy – Đã tìm ra", "Hiểu – Đồng cảm – Giải thích", "Chào – Hỏi – Chốt"], correctAnswer: 1 },
      { id: 2, question: "Khi khách nói 'Để tôi suy nghĩ thêm', nguyên nhân thật thường là gì?", options: ["Khách thật sự bận", "Chưa đủ thông tin hoặc chưa tin tưởng", "Khách không có tiền", "Khách đã mua rồi"], correctAnswer: 1 },
      { id: 3, question: "Mở đầu cuộc gọi lần đầu nên xin bao nhiêu phút?", options: ["5 phút", "10 phút", "2 phút", "30 giây"], correctAnswer: 2 },
      { id: 4, question: "Khi khách nói 'Tôi đã có người tư vấn rồi', nên phản hồi thế nào?", options: ["Nói xấu đối thủ", "Chia sẻ thêm góc nhìn khác, để khách so sánh", "Cúp máy ngay", "Giảm giá để cạnh tranh"], correctAnswer: 1 },
      { id: 5, question: "Kịch bản đặt lịch hẹn nên đưa ra mấy lựa chọn thời gian?", options: ["1 lựa chọn", "2 lựa chọn (cho khách chọn)", "5 lựa chọn", "Để khách tự đề xuất"], correctAnswer: 1 },
    ]
  },
  {
    id: 10,
    title: "Telesale & Gọi điện",
    shortDesc: "Kỹ năng gọi điện chuyên nghiệp",
    icon: "Phone",
    accentColor: "#d97706",
    content: `# Telesale & Gọi điện

## Chuẩn bị trước khi gọi

- **Nghiên cứu khách**: Xem lại thông tin trong CRM, nguồn khách, lịch sử tương tác
- **Chuẩn bị script**: Có kịch bản mở đầu, câu hỏi khám phá, FAQ sẵn sàng
- **Tâm thế**: Năng lượng tích cực, mỉm cười khi nói (khách nghe được qua giọng)
- **Môi trường**: Nơi yên tĩnh, có sổ ghi chú, CRM mở sẵn

## Mở đầu cuộc gọi (dưới 15 giây)

1. Chào + Xưng danh
2. Nêu lý do gọi (ngắn gọn, liên quan đến khách)
3. Xin phép thời gian

> "Dạ chào anh/chị [Tên], em là [Tên] bên [Công ty]. Em gọi vì thấy anh/chị quan tâm đến [lý do]. Anh/chị có tiện nghe em 2 phút không ạ?"

## Trong cuộc gọi

- **Đặt câu hỏi mở**: "Anh/chị đang tìm kiếm BĐS cho mục đích gì ạ?"
- **Lắng nghe chủ động**: Không ngắt lời, gật đầu bằng "Dạ", "Em hiểu"
- **Ghi chú**: Ghi nhanh keyword nhu cầu, ngân sách, timeline
- **Không bán hàng ngay**: Mục tiêu cuộc gọi đầu = hiểu nhu cầu + đặt lịch hẹn

## Kết thúc cuộc gọi

- **Chốt bước tiếp theo**: "Vậy em sẽ gửi thông tin qua Zalo và mình hẹn gặp thứ 7 nhé ạ?"
- **Cảm ơn**: "Em cảm ơn anh/chị đã dành thời gian. Chúc anh/chị một ngày tốt lành!"
- **Nhập CRM ngay**: Trong vòng 5 phút sau cuộc gọi

## Xử lý tình huống

| Tình huống | Cách xử lý |
|---|---|
| Khách cúp máy | Ghi nhận, gọi lại sau 2-3 ngày vào khung giờ khác |
| Khách nói bận | "Dạ em hiểu. Vậy em gọi lại lúc nào tiện cho anh/chị ạ?" |
| Khách tỏ ra khó chịu | "Dạ em xin lỗi đã làm phiền. Em chỉ muốn chia sẻ thông tin hữu ích. Chúc anh/chị ngày tốt lành ạ." |
| Khách hỏi giá ngay | "Dạ giá dao động từ [X-Y]. Để em tư vấn đúng sản phẩm phù hợp, anh/chị cho em hỏi thêm vài câu nhé?" |

## KPI Telesale

| Chỉ số | Mục tiêu |
|---|---|
| Thời lượng trung bình/cuộc gọi | 2-5 phút (cuộc gọi có chất lượng) |
| Tỷ lệ chuyển đổi sang lịch hẹn | >10% cuộc gọi có kết nối |
| Số cuộc gọi/ngày | 15-25 (tùy giai đoạn) |
| Tỷ lệ khách nghe máy | >40% |

## Script mẫu cho từng tình huống

**Khách từ quảng cáo Facebook:**
> "Dạ chào anh/chị, em là [Tên]. Em thấy anh/chị vừa đăng ký nhận thông tin dự án [X] trên Facebook. Em gọi để chia sẻ thêm một số thông tin mới nhất về dự án này ạ."

**Khách từ sự kiện:**
> "Dạ chào anh/chị, em là [Tên]. Hôm trước mình gặp nhau tại sự kiện [X], anh/chị có để lại thông tin quan tâm. Em gọi để hỗ trợ thêm ạ."`,
    quiz: [
      { id: 1, question: "Mở đầu cuộc gọi nên trong bao nhiêu giây?", options: ["30 giây", "Dưới 15 giây", "1 phút", "5 giây"], correctAnswer: 1 },
      { id: 2, question: "Mục tiêu cuộc gọi đầu tiên là gì?", options: ["Bán hàng ngay", "Hiểu nhu cầu + đặt lịch hẹn", "Gửi brochure", "Nói hết về dự án"], correctAnswer: 1 },
      { id: 3, question: "Sau cuộc gọi, cần nhập CRM trong bao lâu?", options: ["1 giờ", "Cuối ngày", "Trong vòng 5 phút", "Cuối tuần"], correctAnswer: 2 },
      { id: 4, question: "Khi khách cúp máy, nên làm gì?", options: ["Gọi lại ngay", "Bỏ qua luôn", "Ghi nhận, gọi lại sau 2-3 ngày vào khung giờ khác", "Nhắn tin ngay lập tức"], correctAnswer: 2 },
      { id: 5, question: "Tỷ lệ chuyển đổi sang lịch hẹn mục tiêu là bao nhiêu?", options: [">5%", ">10%", ">30%", ">50%"], correctAnswer: 1 },
    ]
  },
  {
    id: 11,
    title: "Hệ thống quản trị quan hệ khách hàng (CRM) & Quản trị khách hàng",
    shortDesc: "Đường ống cơ hội bán hàng, phân loại, theo dõi lại khách hàng",
    icon: "Database",
    accentColor: "#7c3aed",
    content: `# Hệ thống quản trị quan hệ khách hàng (CRM) & Quản trị khách hàng

## Đường ống cơ hội bán hàng 7 giai đoạn

| Giai đoạn | Mô tả | Hành động tiếp theo |
|---|---|---|
| 1. Khách mới | Vừa nhận thông tin, chưa liên hệ | Gọi/nhắn trong 24h |
| 2. Đã liên hệ | Đã nói chuyện, chưa rõ nhu cầu | Đặt câu hỏi khám phá |
| 3. Đã khám phá nhu cầu | Biết nhu cầu, ngân sách, timeline | Đề xuất sản phẩm phù hợp |
| 4. Đã tư vấn | Đã trình bày giải pháp | Xử lý do dự, gửi tài liệu bổ sung |
| 5. Đang cân nhắc | Khách đang so sánh, bàn bạc | Theo dõi lại khách hàng giá trị, tạo urgency nhẹ |
| 6. Đã chốt | Ký hợp đồng, đặt cọc | Hỗ trợ thủ tục, chúc mừng |
| 7. Chăm sóc sau bán | Đã hoàn tất giao dịch | Hỏi thăm, xin giới thiệu khách hàng, upsell |

## Cách nhập dữ liệu chuẩn

**Thông tin bắt buộc:**
- Họ tên đầy đủ
- Số điện thoại (chính + phụ nếu có)
- Nguồn khách (data công ty/MXH/giới thiệu khách hàng/sự kiện)
- Nhu cầu sơ bộ (ở thực/đầu tư/tích sản)
- Ngân sách dự kiến
- Timeline mua
- Bước tiếp theo + ngày theo dõi lại khách hàng

**Ghi chú mỗi tương tác:**
- Ngày giờ liên hệ
- Nội dung trao đổi (tóm tắt)
- Phản hồi của khách
- Bước tiếp theo đã thống nhất

## Phân loại khách hàng

| Loại | Định nghĩa | Tần suất theo dõi lại khách hàng |
|---|---|---|
| 🔥 Nóng | Mua trong 7 ngày, đã xem nhà, đang so sánh | Mỗi ngày hoặc cách ngày |
| 🟡 Ấm | Mua trong 30 ngày, có nhu cầu rõ, đang tìm hiểu | 2-3 lần/tuần |
| 🧊 Lạnh | Chưa rõ timeline, đang nurturing | 1 lần/tuần, gửi nội dung giá trị |

## Quy tắc vàng CRM

> **Nhập CRM trong vòng 2 giờ sau mỗi tương tác. Không có ngoại lệ.**

## Dashboard cá nhân: đọc hiểu số liệu

- **Tổng khách trong đường ống cơ hội bán hàng**: Bao nhiêu khách đang chăm sóc?
- **Phân bổ theo giai đoạn**: Có bị nghẽn ở giai đoạn nào không?
- **Tỷ lệ chuyển bước**: Từ liên hệ → khám phá → tư vấn → chốt
- **Khách quá hạn theo dõi lại khách hàng**: Ai đang bị bỏ quên?
- **Nguồn khách hiệu quả nhất**: Đầu tư thời gian vào đâu?`,
    quiz: [
      { id: 1, question: "Đường ống cơ hội bán hàng CRM có bao nhiêu giai đoạn?", options: ["5 giai đoạn", "6 giai đoạn", "7 giai đoạn", "10 giai đoạn"], correctAnswer: 2 },
      { id: 2, question: "Khách 'Nóng' được định nghĩa thế nào?", options: ["Khách mới vào đường ống cơ hội bán hàng", "Mua trong 7 ngày, đã xem nhà, đang so sánh", "Khách đã mua rồi", "Khách chưa có nhu cầu"], correctAnswer: 1 },
      { id: 3, question: "Quy tắc vàng hệ thống quản trị quan hệ khách hàng (CRM) là gì?", options: ["Nhập cuối ngày", "Nhập CRM trong vòng 2 giờ sau mỗi tương tác", "Nhập cuối tuần", "Chỉ nhập khi có giao dịch"], correctAnswer: 1 },
      { id: 4, question: "Tần suất theo dõi lại khách hàng khách 'Ấm' là bao nhiêu?", options: ["Mỗi ngày", "2-3 lần/tuần", "1 lần/tuần", "1 lần/tháng"], correctAnswer: 1 },
      { id: 5, question: "Thông tin nào KHÔNG bắt buộc khi nhập CRM?", options: ["Họ tên", "Nguồn khách", "Sở thích cá nhân", "Nhu cầu sơ bộ"], correctAnswer: 2 },
    ]
  },
  {
    id: 12,
    title: "Công nghệ & AI hỗ trợ bán hàng",
    shortDesc: "AI soạn tin, phân tích, tạo nội dung",
    icon: "Bot",
    accentColor: "#7c3aed",
    content: `# Công nghệ & AI hỗ trợ bán hàng

## Nguyên tắc cốt lõi

> **trí tuệ nhân tạo (AI) là trợ lý, không phải thay thế — bạn vẫn cần sự chân thành và nhiệt huyết.**

## 1. AI soạn tin nhắn theo dõi lại khách hàng cá nhân hóa

**Prompt mẫu:**
> "Hãy soạn tin nhắn Zalo theo dõi lại khách hàng cho khách hàng tên [X], đã tư vấn dự án [Y] hôm qua. Khách quan tâm đến [nhu cầu]. Giọng văn thân thiện, chuyên nghiệp, ngắn gọn dưới 100 chữ."

**Lưu ý:** Luôn đọc lại và chỉnh sửa cho phù hợp với phong cách cá nhân trước khi gửi.

## 2. AI phân tích cuộc gọi và gợi ý cải thiện

- Ghi âm cuộc gọi (được phép của khách)
- Dùng AI phân tích: tỷ lệ nói/nghe, câu hỏi đã đặt, cơ hội bỏ lỡ
- Nhận gợi ý cải thiện cho cuộc gọi tiếp theo

## 3. AI tạo nội dung marketing

- **Bài đăng Facebook**: Cho AI viết draft, bạn chỉnh giọng văn cá nhân
- **Caption**: Mô tả ngắn gọn, có CTA
- **Kịch bản video**: Outline 3 phần: Hook → Nội dung → CTA
- **Infographic**: Cho AI gợi ý data points, bạn thiết kế trên Canva

## 4. Chatbot hỗ trợ trả lời khách 24/7

- Trả lời câu hỏi cơ bản về dự án (giá, vị trí, tiện ích)
- Thu thập thông tin khách khi bạn không online
- Chuyển khách "nóng" sang bạn ngay lập tức

## 5. Công cụ tự động hóa

| Công cụ | Chức năng |
|---|---|
| Lịch tự động | Đặt lịch theo dõi lại khách hàng, nhắc nhở không bỏ sót |
| Email/Zalo automation | Gửi thông tin tự động theo lịch |
| Báo cáo tự động | Tổng hợp KPI cuối ngày/tuần |
| Nội dung scheduler | Lên lịch đăng bài tự động |

## 6. Ứng dụng AI trong luyện tập

- **Luyện tập tình huống với AI**: Luyện xử lý từ chối, trình bày tư vấn ngắn sản phẩm
- **Phản hồi kịch bản**: Cho AI đánh giá kịch bản của bạn
- **Nghiên cứu thị trường**: Hỏi AI tổng hợp thông tin khu vực
- **Soạn email/tin nhắn**: Tạo template, cá nhân hóa sau`,
    quiz: [
      { id: 1, question: "Nguyên tắc cốt lõi khi dùng AI trong bán hàng là gì?", options: ["AI thay thế hoàn toàn con người", "trí tuệ nhân tạo (AI) là trợ lý, không phải thay thế — vẫn cần sự chân thành", "Chỉ dùng AI, không cần kỹ năng", "AI chỉ dùng cho marketing"], correctAnswer: 1 },
      { id: 2, question: "Khi AI soạn tin nhắn theo dõi lại khách hàng, bước tiếp theo là gì?", options: ["Gửi ngay không cần xem", "Đọc lại và chỉnh sửa cho phù hợp phong cách cá nhân", "Xóa đi viết lại", "Gửi cho sếp duyệt"], correctAnswer: 1 },
      { id: 3, question: "AI có thể hỗ trợ phân tích cuộc gọi về những gì?", options: ["Chỉ đếm số phút", "Tỷ lệ nói/nghe, câu hỏi đã đặt, cơ hội bỏ lỡ", "Chỉ ghi âm", "Chỉ chấm điểm"], correctAnswer: 1 },
      { id: 4, question: "Chatbot hỗ trợ bán hàng có thể làm gì?", options: ["Thay thế hoàn toàn sales", "Trả lời câu hỏi cơ bản, thu thập thông tin, chuyển khách nóng", "Chỉ gửi brochure", "Chỉ hoạt động giờ hành chính"], correctAnswer: 1 },
      { id: 5, question: "Nguyên tắc 80/20 trong nội dung là gì?", options: ["80% bán hàng, 20% giá trị", "80% giá trị, 20% bán hàng", "80% video, 20% bài viết", "80% AI, 20% tự viết"], correctAnswer: 1 },
    ]
  },
  {
    id: 13,
    title: "Xây dựng thương hiệu cá nhân & Nội dung",
    shortDesc: "Hồ sơ cá nhân, nội dung, video cơ bản",
    icon: "Megaphone",
    accentColor: "#059669",
    content: `# Xây dựng thương hiệu cá nhân & Nội dung

## Vì sao phải làm ngay

Năm 2026, khách hàng Google tên bạn trước khi nghe tư vấn. **Hồ sơ cá nhân trống = mất uy tín trước khi mở miệng.**

Thương hiệu cá nhân không phải là "làm màu" hay "sống ảo". Thương hiệu cá nhân là bằng chứng số cho thấy bạn đang làm nghề nghiêm túc, có kiến thức, có trách nhiệm và đáng tin cậy.

> Nguyên tắc: Bạn không cần trở thành influencer. Bạn chỉ cần trở thành người mà khi khách hàng tìm kiếm thông tin BĐS ở khu vực của bạn, họ thấy bạn xuất hiện với nội dung có giá trị.

## Xây hồ sơ cá nhân chuyên nghiệp (Tuần 1–2)

| Yếu tố | Tiêu chuẩn |
|---|---|
| Ảnh đại diện | Chân dung chuyên nghiệp, rõ mặt, trang phục lịch sự |
| Ảnh bìa | Liên quan đến nghề (dự án, đội nhóm) |
| Bio | Tên + Vai trò + Khu vực + Liên hệ |
| Nội dung | Ít nhất 3–5 bài về BĐS |

### Zalo
- Tên hiển thị: Tên thật + Vai trò (VD: "Minh Anh — Tư vấn BĐS Quận 9")
- Ảnh đại diện chuyên nghiệp
- Trạng thái: Câu giá trị ngắn gọn

### TikTok/YouTube Shorts (tùy chọn từ tháng 2)
- Username rõ ràng, dễ tìm
- Bio ngắn gọn + link liên hệ
- 3–5 video đầu tiên: giới thiệu bản thân, review khu vực

## 5 loại nội dung cơ bản

| Loại nội dung | Ví dụ | Tần suất |
|---|---|---|
| Kiến thức mua nhà | "5 điều cần kiểm tra trước khi đặt cọc" | 2–3 bài/tuần |
| Review khu vực/dự án | Quay video thực tế, chụp ảnh tiến độ | 1–2 bài/tuần |
| Câu chuyện nghề | Chia sẻ hành trình, bài học từ khách hàng | 1 bài/tuần |
| Thông tin thị trường | Cập nhật giá, chính sách mới, xu hướng | 1–2 bài/tuần |
| Giới thiệu sản phẩm | Bài viết/video về dự án đang bán | 1–2 bài/tuần |

## Nguyên tắc 80/20

**80% giá trị — 20% bán hàng.**

## Làm video cơ bản bằng điện thoại

| Dạng video | Thời lượng | Cách quay | Khi nào quay |
|---|---|---|---|
| Talking head | 30–60 giây | Đặt điện thoại ngang tầm mắt, ánh sáng tự nhiên | Chia sẻ tips |
| Walk-through | 60–90 giây | Cầm điện thoại ngang, đi chậm, nói mô tả | Review dự án |
| Slide + voiceover | 30–60 giây | Dùng Canva tạo slide, quay màn hình + thu giọng | So sánh, phân tích |

### Quy trình 15–20 phút/video
1. Chọn chủ đề (2 phút)
2. Viết outline (3 phút)
3. Quay (5–7 phút)
4. Edit — CapCut (5–7 phút)
5. Đăng + caption (3 phút)

## Lịch nội dung mẫu tuần đầu tiên

| Thứ | Nền tảng | Loại | Nội dung |
|---|---|---|---|
| Thứ 2 | Facebook | Bài viết | Giới thiệu bản thân + lý do chọn nghề |
| Thứ 3 | Zalo | Chia sẻ | Repost bài kiến thức + comment cá nhân |
| Thứ 4 | Facebook | Ảnh + caption | Ảnh thực tế dự án + 3 điểm nổi bật |
| Thứ 5 | TikTok | Video ngắn | "1 phút: Mua nhà lần đầu cần biết gì?" |
| Thứ 6 | Facebook | Bài viết | Bài học từ tuần làm việc đầu tiên |
| Thứ 7 | Zalo | Story | Behind the scenes: khảo sát dự án |

## Sai lầm cần tránh

| Sai lầm | Cách làm đúng |
|---|---|
| Chỉ đăng sản phẩm | Giữ tỷ lệ 80% giá trị / 20% bán hàng |
| Copy paste nội dung | Viết lại bằng giọng văn của mình |
| Đăng rồi bỏ, không tương tác | Trả lời mọi comment/inbox trong 2 giờ |
| Quá cầu toàn không dám đăng | "Done is better than perfect" |

## Công cụ miễn phí

Canva, CapCut, ChatGPT, Google Trends, Meta Business Suite`,
    quiz: [
      { id: 1, question: "Vì sao nhân sự mới 2026 phải xây thương hiệu cá nhân ngay?", options: ["Để nổi tiếng", "Vì khách hàng Google tên bạn trước khi nghe tư vấn", "Vì sếp yêu cầu", "Để có nhiều follower"], correctAnswer: 1 },
      { id: 2, question: "Nguyên tắc 80/20 trong nội dung là gì?", options: ["80% bán hàng, 20% giá trị", "80% giá trị, 20% bán hàng", "80% video, 20% bài viết", "80% Facebook, 20% Zalo"], correctAnswer: 1 },
      { id: 3, question: "Quy trình làm 1 video ngắn mất bao lâu?", options: ["5 phút", "15–20 phút", "1 giờ", "Nửa ngày"], correctAnswer: 1 },
      { id: 4, question: "Hồ sơ cá nhân cần hoàn thành trong tuần nào?", options: ["Tuần 1–2", "Tháng 2", "Tháng 3", "Khi nào rảnh"], correctAnswer: 0 },
      { id: 5, question: "Sai lầm 'Đăng rồi bỏ' dẫn đến hậu quả gì?", options: ["Không ảnh hưởng", "Thuật toán giảm hiển thị, khách không thấy", "Tăng follower", "Tiết kiệm thời gian"], correctAnswer: 1 },
    ]
  },
  {
    id: 14,
    title: "Luyện tập tình huống & Luyện tập",
    shortDesc: "Lịch luyện tập, tình huống, đánh giá",
    icon: "Swords",
    accentColor: "#d97706",
    content: `# Luyện tập tình huống & Luyện tập

## Lịch luyện tập tình huống

**30 phút/ngày, 5 ngày/tuần** — Đây là hoạt động bắt buộc, không phải tùy chọn.

## Các tình huống luyện tập tình huống theo tuần

| Tuần | Tình huống | Mục tiêu |
|---|---|---|
| Tuần 1–2 | Gọi điện lạnh (cold call) | Luyện mở đầu, xin phép thời gian, tạo rapport |
| Tuần 3–4 | Tư vấn trực tiếp | Luyện khám phá nhu cầu, trình bày tư vấn ngắn sản phẩm |
| Tuần 5–6 | Xử lý từ chối | Luyện Feel-Felt-Found, giữ bình tĩnh |
| Tuần 7–8 | Chốt sale | Luyện đề xuất bước tiếp theo, tạo urgency |
| Tuần 9–12 | Tình huống tổng hợp | Kết hợp tất cả kỹ năng |

## Quy trình luyện tập tình huống

1. **Nhận brief**: Mentor đưa tình huống cụ thể (loại khách, nhu cầu, từ chối)
2. **Thực hiện**: Mentee đóng vai sales, mentor đóng vai khách (3-5 phút)
3. **Nhận feedback**: Mentor phản hồi cụ thể (điểm tốt + cần cải thiện)
4. **Ghi nhận bài học**: Mentee ghi vào nhật ký học tập
5. **Làm lại**: Thực hiện lại với cải tiến (2-3 phút)

## Tiêu chí đánh giá

| Tiêu chí | Điểm 1-5 | Mô tả |
|---|---|---|
| Mở đầu | 1-5 | Tạo ấn tượng, xin phép, nêu lý do |
| Khám phá nhu cầu | 1-5 | Câu hỏi mở, lắng nghe, ghi nhận |
| Xử lý do dự | 1-5 | Đồng cảm, dẫn chứng, đề xuất |
| Chốt | 1-5 | Đề xuất bước tiếp theo rõ ràng |
| Ngôn ngữ cơ thể | 1-5 | Tự tin, mỉm cười, eye contact |

**Đạt yêu cầu: Trung bình ≥ 3.5/5**

## Quay video luyện tập tình huống

- Quay video để tự review và mentor đánh giá
- So sánh video tuần 1 với tuần 4 để thấy tiến bộ
- Lưu trữ làm tài liệu đào tạo cho người sau`,
    quiz: [
      { id: 1, question: "Lịch luyện tập tình huống yêu cầu bao nhiêu thời gian mỗi ngày?", options: ["15 phút", "30 phút/ngày, 5 ngày/tuần", "1 giờ", "Tùy thích"], correctAnswer: 1 },
      { id: 2, question: "Quy trình luyện tập tình huống gồm mấy bước?", options: ["3 bước", "5 bước: Nhận brief → Thực hiện → Feedback → Ghi nhận → Làm lại", "7 bước", "2 bước"], correctAnswer: 1 },
      { id: 3, question: "Điểm đạt yêu cầu luyện tập tình huống là bao nhiêu?", options: ["2/5", "3/5", "Trung bình ≥ 3.5/5", "5/5"], correctAnswer: 2 },
      { id: 4, question: "Tuần 5-6 luyện tình huống gì?", options: ["Gọi điện lạnh", "Tư vấn trực tiếp", "Xử lý từ chối", "Chốt sale"], correctAnswer: 2 },
      { id: 5, question: "Vì sao cần quay video luyện tập tình huống?", options: ["Để đăng MXH", "Để tự review và so sánh tiến bộ", "Để nộp cho công ty", "Không cần thiết"], correctAnswer: 1 },
    ]
  },
  {
    id: 15,
    title: "KPI & Báo cáo",
    shortDesc: "Chỉ số đo lường, mẫu báo cáo",
    icon: "BarChart3",
    accentColor: "#2563eb",
    content: `# KPI & Báo cáo

## KPI tuần cho nhân sự mới

| Chỉ số | Mục tiêu | Cách đo |
|---|---|---|
| Hội thoại chất lượng | 15–20/tuần | CRM log |
| Lịch hẹn tư vấn | 3–5/tuần | Calendar + CRM |
| Theo dõi lại khách hàng đúng hạn | >90% | CRM reminder |
| CRM cập nhật | 100% tương tác | Kiểm tra cuối ngày |
| Luyện tập tình huống hoàn thành | 5 buổi/tuần | Check-in mentor |
| Nội dung đăng | 5–7 bài/tuần | Bảng theo dõi |
| Bài học ghi nhận | 3 insight/tuần | Nhật ký học tập |

## Mẫu báo cáo ngày

1. **Số cuộc gọi** hôm nay: ___
2. **Kết quả**: ___ kết nối / ___ không nghe / ___ từ chối
3. **Lịch hẹn mới**: ___
4. **Bài học hôm nay**: ___
5. **Kế hoạch ngày mai**: ___

## Mẫu báo cáo tuần

1. **Tổng KPI tuần**:
   - Cuộc gọi: ___ / Mục tiêu: ___
   - Lịch hẹn: ___ / Mục tiêu: ___
   - Nội dung: ___ / Mục tiêu: ___
   - CRM cập nhật: ___%

2. **So sánh với tuần trước**: Tăng/Giảm ở chỉ số nào?

3. **Top 3 thành tựu tuần này**:
   - 1. ___
   - 2. ___
   - 3. ___

4. **Top 3 cần cải thiện**:
   - 1. ___
   - 2. ___
   - 3. ___

5. **Mục tiêu tuần sau**: ___

## Cách đọc hiểu số liệu

- **Tỷ lệ kết nối thấp** (<40%): Kiểm tra khung giờ gọi, chất lượng data
- **Tỷ lệ chuyển đổi thấp** (<10%): Xem lại kịch bản, luyện luyện tập tình huống thêm
- **Theo dõi lại khách hàng trễ hạn**: Đặt nhắc nhở CRM, ưu tiên khách nóng
- **Nội dung ít tương tác**: Thay đổi chủ đề, thử format mới (video)`,
    quiz: [
      { id: 1, question: "Mục tiêu hội thoại chất lượng mỗi tuần là bao nhiêu?", options: ["5-10", "15-20", "25-30", "50+"], correctAnswer: 1 },
      { id: 2, question: "Tỷ lệ theo dõi lại khách hàng đúng hạn mục tiêu là bao nhiêu?", options: [">50%", ">70%", ">90%", "100%"], correctAnswer: 2 },
      { id: 3, question: "Báo cáo ngày cần có những mục nào?", options: ["Chỉ số cuộc gọi", "Số cuộc gọi, kết quả, lịch hẹn mới, bài học, kế hoạch ngày mai", "Chỉ doanh số", "Chỉ số khách mới"], correctAnswer: 1 },
      { id: 4, question: "Khi tỷ lệ kết nối thấp (<40%), nên kiểm tra gì?", options: ["Kịch bản bán hàng", "Khung giờ gọi và chất lượng data", "Giá sản phẩm", "Đội nhóm"], correctAnswer: 1 },
      { id: 5, question: "Số bài nội dung mục tiêu mỗi tuần là bao nhiêu?", options: ["1-2 bài", "3-4 bài", "5-7 bài", "10+ bài"], correctAnswer: 2 },
    ]
  },
  {
    id: 16,
    title: "Mentoring & Kèm cặp",
    shortDesc: "Quy trình nhân bản 5 bước",
    icon: "Users",
    accentColor: "#e11d48",
    content: `# Mentoring & Kèm cặp

## Quy trình nhân bản 5 bước

| Bước | Tên | Mô tả |
|---|---|---|
| 1 | Bản thân làm được | Mentor thực hiện trước mặt mentee, cho thấy kết quả thực tế |
| 2 | Đội nhóm quan sát | Mentee ngồi cạnh, quan sát, ghi chép, đặt câu hỏi sau |
| 3 | Để họ tự làm và mình chỉnh sửa | Mentee thực hành, mentor quan sát và feedback ngay |
| 4 | Thử thách | Giao tình huống khó hơn, để mentee tự xử lý, mentor chỉ can thiệp khi cần |
| 5 | Để họ tự kèm người mới | Mentee trở thành mentor cho người mới hơn, hoàn thành vòng lặp |

## Lịch kèm cặp

| Thời gian | Bước | Hoạt động |
|---|---|---|
| Ngày 1–14 | Bước 1–2 | Quan sát mentor làm việc |
| Ngày 15–30 | Bước 3 | Tự làm + được chỉnh |
| Ngày 31–60 | Bước 4 | Thử thách |
| Ngày 61–90 | Bước 5 | Bắt đầu kèm người khác |

## Vai trò mentor

> Không phải "sếp" mà là "người đi trước". Kèm bằng hành động, không chỉ bằng lời nói. Phản hồi cụ thể, kịp thời, có tình.

## Nguyên tắc phản hồi

- **Cụ thể**: Không nói "Tốt lắm" mà nói "Câu hỏi khám phá nhu cầu của em rất tốt vì..."
- **Kịp thời**: Phản hồi ngay sau khi quan sát, không đợi cuối tuần
- **Có tình**: Phản hồi để giúp, không phải để phê phán
- **Có hành động**: Luôn kèm gợi ý cải thiện cụ thể

## Bài kiểm tra tổng hợp

Tổng hợp câu hỏi từ tất cả các module. **Đạt 80% trở lên = Hoàn thành chương trình đào tạo cơ bản.** Dưới 80% = Học lại các module chưa đạt.`,
    quiz: [
      { id: 1, question: "Quy trình nhân bản có bao nhiêu bước?", options: ["3 bước", "5 bước", "7 bước", "10 bước"], correctAnswer: 1 },
      { id: 2, question: "Bước 2 'Đội nhóm quan sát' yêu cầu mentee làm gì?", options: ["Tự làm ngay", "Ngồi cạnh, quan sát, ghi chép, đặt câu hỏi sau", "Dạy người khác", "Chỉ nghe giảng"], correctAnswer: 1 },
      { id: 3, question: "Vai trò của mentor là gì?", options: ["Là sếp", "Là người đi trước, kèm bằng hành động", "Chỉ kiểm tra KPI", "Chỉ phê bình"], correctAnswer: 1 },
      { id: 4, question: "Ngày 61-90 mentee ở bước nào?", options: ["Bước 1-2", "Bước 3", "Bước 4", "Bước 5: Bắt đầu kèm người khác"], correctAnswer: 3 },
      { id: 5, question: "Điểm đạt bài kiểm tra tổng hợp là bao nhiêu?", options: ["60%", "70%", "80% trở lên", "90%"], correctAnswer: 2 },
    ]
  },
];
