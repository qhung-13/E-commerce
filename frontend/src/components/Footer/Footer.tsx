import "./Footer.css";

const footerLinks = [
  {
    title: "Mua sắm",
    items: ["Điện tử", "Thời trang", "Nhà cửa", "Thể thao"],
  },
  {
    title: "Hỗ trợ",
    items: ["Trung tâm trợ giúp", "Đổi trả miễn phí", "Liên hệ", "FAQ"],
  },
  {
    title: "Công ty",
    items: ["Về chúng tôi", "Tuyển dụng", "Blog", "Báo chí"],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">
            Shop<span>VN</span>
          </span>
          <p className="footer-desc">
            Nền tảng mua sắm trực tuyến hàng đầu Việt Nam. Hàng triệu sản phẩm
            chính hãng, giao hàng nhanh toàn quốc.
          </p>
          <div className="footer-socials">
            {["Facebook", "Instagram", "TikTok", "YouTube"].map((s) => (
              <a key={s} href="#" className="footer-social-btn">
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((col) => (
          <div key={col.title} className="footer-col">
            <h4 className="footer-col-title">{col.title}</h4>
            <ul className="footer-col-links">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2024 ShopVN. Tất cả quyền được bảo lưu.</p>
          <p>Built with React + Microservices ♥</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
