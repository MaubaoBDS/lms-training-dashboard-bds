import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  Minus,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type LeadStatus = "idle" | "loading" | "success" | "error";

type LeadForm = {
  name: string;
  phone: string;
  need: string;
  timeframe: string;
  note: string;
  website: string;
};

const initialLead: LeadForm = {
  name: "",
  phone: "",
  need: "Tư vấn sản phẩm phù hợp",
  timeframe: "Đang tìm hiểu",
  note: "",
  website: "",
};

const facts = [
  ["0.36 ha", "Quy mô khu đất"],
  ["40 + 2", "Tầng nổi + tầng hầm"],
  ["350", "Căn hộ chọn lọc"],
  ["Q1/2029", "Bàn giao dự kiến"],
];

const residences = [
  { type: "Studio", count: "24 căn", area: "39.7 m²", image: "/astor/slide-35.jpg" },
  { type: "2 phòng ngủ", count: "175 căn", area: "69.4 – 96.6 m²", image: "/astor/slide-36.jpg" },
  { type: "3 phòng ngủ", count: "123 căn", area: "103 – 122 m²", image: "/astor/slide-37.jpg" },
  { type: "Duplex", count: "20 căn", area: "134 – 214 m²", image: "/astor/slide-31.jpg" },
  { type: "Dual Key – 5PN", count: "4 căn", area: "201 – 217 m²", image: "/astor/slide-34.jpg" },
  { type: "Penthouse", count: "4 căn", area: "230 – 243.6 m²", image: "/astor/slide-32.jpg" },
];

const amenities = [
  ["01", "Bể bơi bốn mùa", "Khoảng nghỉ riêng tư cho nhịp sống quanh năm."],
  ["02", "Health Hub", "Trị liệu đa giác quan, spa, xông hơi và Jacuzzi."],
  ["03", "Clubhouse", "Lounge tiếp khách, thư viện và tổ hợp giải trí."],
  ["04", "Art Gallery", "Nghệ thuật hiện diện trong những điểm chạm hằng ngày."],
  ["05", "Smart Parking", "Hệ thống đỗ xe thông minh 3 tầng."],
  ["06", "The Emerald Court", "Vườn nghệ thuật và đại thảo viên giữa đô thị."],
];

const standards = [
  "Kính Low-E Double Silver giảm bức xạ nhiệt",
  "An ninh đa lớp bằng AI tại các điểm trọng yếu",
  "Máy phát điện dự phòng 100% cho hạng mục thiết yếu",
  "Nước sạch tại vòi, lọc từ đầu nguồn",
  "Smart Home: chiếu sáng, điều hòa và an ninh",
  "Không gian xanh với khoảng 3.000 m² khuôn viên",
];

const ecosystem = [
  ["UNIS", "Trường Quốc tế Liên Hợp Quốc"],
  ["CIPUTRA CLUB", "Golf, tennis, gym & wellness"],
  ["LGA", "Học viện Golf Leadbetter"],
  ["LOTTE MALL", "Thương mại & dịch vụ cao cấp"],
];

function track(event: string, params?: Record<string, string>) {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === "function") fbq("track", event, params ?? {});
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lead, setLead] = useState(initialLead);
  const [leadStatus, setLeadStatus] = useState<LeadStatus>("idle");

  useEffect(() => {
    track("ViewContent", { content_name: "Astor 1 Ciputra", content_category: "real_estate" });
  }, []);

  const scrollTo = (id: string, placement = "nav") => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
    if (id === "contact") track("Contact", { placement, contact_method: "lead_form" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLeadStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      const data = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !data.success) throw new Error(data.message || "Không thể gửi thông tin lúc này.");
      setLeadStatus("success");
      setLead(initialLead);
      track("Lead", { content_name: "Astor 1 Ciputra", placement: "contact_form" });
    } catch {
      setLeadStatus("error");
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Về đầu trang">
          <span className="brand-mark">A</span>
          <span className="brand-type"><strong>ASTOR</strong><small>ONE · CIPUTRA</small></span>
        </button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <button onClick={() => scrollTo("story")}>Câu chuyện</button>
          <button onClick={() => scrollTo("residences")}>Sản phẩm</button>
          <button onClick={() => scrollTo("amenities")}>Đặc quyền sống</button>
          <button onClick={() => scrollTo("location")}>Vị trí</button>
          <button className="nav-cta" onClick={() => scrollTo("contact", "header")}>Nhận thông tin <ArrowRight size={15} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Mở menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-label="Astor 1 tại Ciputra">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="eyebrow light"><span className="eyebrow-line" /> The Atelier of Refined Living</div>
            <p className="hero-kicker">ASTOR 1 · KĐT NAM THĂNG LONG (CIPUTRA)</p>
            <h1>Nơi phong thái<br /><em>sống được định hình.</em></h1>
            <p className="hero-description">Một biểu tượng Art Deco giữa hệ sinh thái sống riêng tư của Ciputra — nơi mỗi ngày được nâng tầm bằng kiến trúc, chất lượng và những khoảng xanh.</p>
            <div className="hero-actions">
              <button className="button button-gold" onClick={() => scrollTo("contact", "hero")}>Nhận bảng thông tin <ArrowRight size={17} /></button>
              <button className="text-link light-link" onClick={() => scrollTo("story", "hero")}>Khám phá Astor 1 <ArrowDown size={16} /></button>
            </div>
          </div>
          <div className="hero-side-note">HÌNH ẢNH MINH HỌA · PHỐI CẢNH DỰ ÁN</div>
          <div className="hero-scroll"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="price-strip">
          <div className="container price-inner">
            <div className="price-label"><Sparkles size={15} /> Tín hiệu thị trường mới</div>
            <div className="price-value"><span>Rumor price</span> Từ 95 triệu/m²</div>
            <div className="price-note">Mức giá rumor mới công bố hôm nay · Cần xác nhận theo chính sách chính thức</div>
          </div>
        </section>

        <section className="intro-section section-pad" id="story">
          <div className="container intro-grid">
            <div className="section-index">01 <span>/</span> STORY</div>
            <div className="intro-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> Từ di sản vải sợi</div>
              <h2>Từ di sản lâu đời<br /><em>đến nghệ thuật sống tinh tuyển.</em></h2>
              <p className="lead-copy">Khởi nguồn từ năm 1957, Pristie bước vào chương phát triển mới với khát vọng kiến tạo những sản phẩm bất động sản cao cấp — nơi vị trí, kiến trúc, chất lượng và trải nghiệm sống gặp nhau.</p>
              <p className="body-copy">Astor 1 là lời tuyên ngôn đầu tiên tại Ciputra: một không gian được định hình cho những chủ nhân đề cao phong thái, sự riêng tư và chất lượng bền vững theo thời gian.</p>
              <button className="text-link dark-link" onClick={() => scrollTo("residences", "story")}>Xem các dòng sản phẩm <ArrowRight size={16} /></button>
            </div>
            <div className="intro-art"><img src="/astor/slide-30.jpg" alt="Cảnh quan nội khu Astor 1 minh họa" /><div className="art-caption">Cảnh quan nội khu · Hình ảnh mang tính chất minh họa</div></div>
          </div>
        </section>

        <section className="facts-section">
          <div className="container facts-grid">
            {facts.map(([value, label]) => <div className="fact" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="overview-section section-pad">
          <div className="container overview-grid">
            <div className="overview-image"><img src="/astor/slide-29.jpg" alt="Phối cảnh kiến trúc Art Deco Astor 1" /><span className="image-label">01 / Art Deco Icon</span></div>
            <div className="overview-copy">
              <div className="section-index">02 <span>/</span> THE ADDRESS</div>
              <div className="eyebrow"><span className="eyebrow-line" /> Một địa chỉ khác biệt</div>
              <h2>Đặt chuẩn sống mới<br /><em>tại phía Tây Hồ Tây.</em></h2>
              <p className="lead-copy">Tọa lạc tại lô IA25, Khu đô thị Nam Thăng Long (Ciputra), Astor 1 thừa hưởng một hệ sinh thái đa lớp — giáo dục quốc tế, thể thao, thương mại và những không gian xanh hiếm có của Hà Nội.</p>
              <div className="detail-list"><div><span>Phát triển dự án</span><strong>Công ty CP BĐS Pristie</strong></div><div><span>Thiết kế · Vận hành</span><strong>Stellar · CBRE</strong></div><div><span>Tổng thầu xây dựng</span><strong>Tập đoàn xây dựng Delta</strong></div><div><span>Pháp lý</span><strong>Sở hữu lâu dài</strong></div></div>
              <button className="text-link dark-link" onClick={() => scrollTo("location", "overview")}>Khám phá hệ sinh thái Ciputra <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>

        <section className="residences-section section-pad" id="residences">
          <div className="container">
            <div className="section-heading-row"><div><div className="section-index">03 <span>/</span> RESIDENCES</div><div className="eyebrow"><span className="eyebrow-line" /> Những không gian dành riêng cho bạn</div><h2>Một bộ sưu tập<br /><em>căn hộ chọn lọc.</em></h2></div><p className="heading-aside">10–12 căn/sàn<br />Thiết kế ưu tiên sự riêng tư</p></div>
            <div className="residence-grid">{residences.map((item) => <article className="residence-card" key={item.type}><div className="residence-image"><img src={item.image} alt={`${item.type} Astor 1`} /><span>{item.count}</span></div><div className="residence-info"><h3>{item.type}</h3><p>{item.area}</p><MoveUpRight size={18} /></div></article>)}</div>
            <div className="center-cta"><button className="button button-outline" onClick={() => scrollTo("contact", "residences")}>Nhận mặt bằng & danh mục căn <ArrowRight size={16} /></button></div>
          </div>
        </section>

        <section className="amenities-section section-pad" id="amenities">
          <div className="container amenities-grid"><div className="amenities-visual"><img src="/astor/slide-31.jpg" alt="Không gian xanh và tiện ích Astor 1" /><div className="visual-note">25 tiện ích nội khu<br /><span>Đặc quyền khép kín · Nhịp sống đương đại</span></div></div><div className="amenities-copy"><div className="section-index">04 <span>/</span> THE PRIVILEGE</div><div className="eyebrow light"><span className="eyebrow-line" /> Đặc quyền khép kín</div><h2>Nhịp sống<br /><em>được chăm chút.</em></h2><p className="light-copy">Từ bể bơi bốn mùa đến Health Hub, từ Clubhouse đến những khu vườn nghệ thuật — 25 tiện ích nội khu được sắp đặt để mỗi ngày ở Astor 1 có thêm một lý do để tận hưởng.</p><div className="amenity-list">{amenities.map(([number, title, desc]) => <div className="amenity-item" key={number}><span>{number}</span><div><strong>{title}</strong><p>{desc}</p></div></div>)}</div></div></div>
        </section>

        <section className="standards-section section-pad">
          <div className="container standards-grid"><div className="standards-copy"><div className="section-index">05 <span>/</span> THE STANDARD</div><div className="eyebrow"><span className="eyebrow-line" /> Tiêu chuẩn định hình phong thái sống</div><h2>Chất lượng<br /><em>nằm trong từng chi tiết.</em></h2><p className="lead-copy">Không chỉ là những gì nhìn thấy. Đó là chất lượng không khí, nguồn nước, an ninh, năng lượng và cách một không gian chăm sóc bạn mỗi ngày.</p><div className="standards-list">{standards.map((item) => <div key={item}><Check size={15} /><span>{item}</span></div>)}</div></div><div className="standards-image"><img src="/astor/slide-34.jpg" alt="Sảnh đón và không gian nội thất Astor 1 minh họa" /><div className="image-label">Grand Lobby · Hình ảnh minh họa</div></div></div>
        </section>

        <section className="location-section section-pad" id="location">
          <div className="container location-grid"><div className="location-image"><img src="/astor/slide-33.jpg" alt="Bể bơi bốn mùa Astor 1 minh họa" /><div className="location-stamp">CIPUTRA<br /><small>HÀ NỘI</small></div></div><div className="location-copy"><div className="section-index">06 <span>/</span> THE ECOSYSTEM</div><div className="eyebrow"><span className="eyebrow-line" /> Tất cả trong vài phút di chuyển</div><h2>Một hệ sinh thái<br /><em>đã hiện hữu.</em></h2><p className="lead-copy">Astor 1 nằm trong lòng Ciputra — một cộng đồng quốc tế với hơn 100 tiện ích ngoại khu dành cho giáo dục, thể thao, sức khỏe, thương mại và những khoảng xanh lớn.</p><div className="ecosystem-grid">{ecosystem.map(([name, label]) => <div key={name}><strong>{name}</strong><span>{label}</span></div>)}</div><button className="text-link dark-link" onClick={() => scrollTo("contact", "location")}>Nhận tư vấn vị trí & giỏ hàng <ArrowRight size={16} /></button></div></div>
        </section>

        <section className="gallery-section"><div className="gallery-head container"><div><div className="section-index">07 <span>/</span> THE ATMOSPHERE</div><h2>Một phong thái<br /><em>được cảm nhận.</em></h2></div><p>Hình ảnh phối cảnh mang tính chất minh họa</p></div><div className="gallery-grid"><img src="/astor/slide-32.jpg" alt="Grand Lobby Astor 1" /><img src="/astor/slide-35.jpg" alt="Phòng khách Astor 1" /><img src="/astor/slide-36.jpg" alt="Phòng bếp Astor 1" /><img src="/astor/slide-37.jpg" alt="Phòng ngủ Astor 1" /></div></section>

        <section className="timeline-section section-pad"><div className="container"><div className="section-index">08 <span>/</span> THE JOURNEY</div><div className="timeline-head"><div><div className="eyebrow"><span className="eyebrow-line" /> Hành trình kiến tạo</div><h2>Từ khởi đầu<br /><em>đến ngày trở về.</em></h2></div><p className="heading-aside">Các mốc thời gian đang được cập nhật theo kế hoạch triển khai dự án.</p></div><div className="timeline"><div className="timeline-step active"><span>01</span><strong>Teasing</strong><small>Tháng 8/2026</small></div><div className="timeline-step"><span>02</span><strong>Kick-off · Booking</strong><small>Tháng 9/2026 · dự kiến</small></div><div className="timeline-step"><span>03</span><strong>Booming · Khớp căn</strong><small>Tháng 10/2026 · dự kiến</small></div><div className="timeline-step"><span>04</span><strong>Mở bán chính thức</strong><small>Tháng 11/2026 · dự kiến</small></div></div></div></section>

        <section className="contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow light"><span className="eyebrow-line" /> Private preview</div><h2>Để lại dấu ấn<br /><em>của riêng bạn.</em></h2><p>Nhận thông tin mặt bằng, danh mục căn và tư vấn riêng cho nhu cầu của bạn.</p><div className="contact-note"><ShieldCheck size={18} /><span>Thông tin của bạn được bảo mật và chỉ dùng cho mục đích tư vấn Astor 1.</span></div></div><form className="lead-form" onSubmit={handleSubmit} noValidate><div className="form-row"><label>Họ và tên<input required value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Nguyễn Văn A" /></label><label>Số điện thoại<input required inputMode="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="09xx xxx xxx" /></label></div><div className="form-row"><label>Nhu cầu<select value={lead.need} onChange={(e) => setLead({ ...lead, need: e.target.value })}><option>Tư vấn sản phẩm phù hợp</option><option>Nhận mặt bằng & bảng giá</option><option>Đăng ký booking</option><option>Tìm hiểu đầu tư</option></select></label><label>Thời gian dự kiến<select value={lead.timeframe} onChange={(e) => setLead({ ...lead, timeframe: e.target.value })}><option>Đang tìm hiểu</option><option>Trong tháng này</option><option>Trong 3 tháng tới</option><option>Chưa xác định</option></select></label></div><label>Ghi chú thêm<textarea rows={3} value={lead.note} onChange={(e) => setLead({ ...lead, note: e.target.value })} placeholder="Diện tích, loại căn hoặc nhu cầu bạn quan tâm..." /></label><input className="honeypot" tabIndex={-1} autoComplete="off" value={lead.website} onChange={(e) => setLead({ ...lead, website: e.target.value })} aria-hidden="true" /><button className="button button-gold form-submit" type="submit" disabled={leadStatus === "loading"}>{leadStatus === "loading" ? "Đang gửi..." : "Gửi yêu cầu tư vấn"} <ArrowRight size={17} /></button>{leadStatus === "success" && <p className="form-message success"><Check size={16} /> Đã tiếp nhận thông tin. Chuyên viên sẽ liên hệ với bạn sớm.</p>}{leadStatus === "error" && <p className="form-message error">Chưa thể gửi thông tin lúc này. Vui lòng thử lại hoặc liên hệ trực tiếp với chuyên viên.</p>}<p className="form-disclaimer">Bằng việc gửi thông tin, bạn đồng ý để đội ngũ tư vấn liên hệ về Astor 1.</p></form></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="brand footer-brand"><span className="brand-mark">A</span><span className="brand-type"><strong>ASTOR</strong><small>ONE · CIPUTRA</small></span></div><p>Từ di sản vải sợi<br />đến nghệ thuật kiến lập phong thái sống.</p><button className="back-top" onClick={() => scrollTo("top", "footer")}>Về đầu trang <ChevronDown size={16} className="rotate-180" /></button></div><div className="container footer-bottom"><span>© 2026 ASTOR 1 · PRISTIE</span><span>Lô IA25 · KĐT Nam Thăng Long (Ciputra), Hà Nội</span><span className="footer-social"><Instagram size={15} /> Private preview</span></div></footer>
      <button className="floating-cta" onClick={() => scrollTo("contact", "floating_cta")}><span>Nhận thông tin</span><ArrowRight size={17} /></button>
    </div>
  );
}

export default App;
