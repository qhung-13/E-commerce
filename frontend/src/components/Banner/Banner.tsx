import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container banner-inner">
        <div className="banner-content">
          <p className="banner-eyebrow">ShopVN Exclusive</p>
          <h1 className="banner-title">
            Mua sắm
            <br />
            thông minh hơn
          </h1>
          <p className="banner-sub">
            Hàng triệu sản phẩm chính hãng, giao hàng nhanh toàn quốc
          </p>
          <button className="banner-cta">Khám phá ngay →</button>
        </div>

        <div className="banner-stats">
          {[
            { value: "10M+", label: "Sản phẩm" },
            { value: "5M+", label: "Khách hàng" },
            { value: "2H", label: "Giao hàng" },
            { value: "98%", label: "Hài lòng" },
          ].map((s) => (
            <div key={s.label} className="banner-stat">
              <span className="banner-stat-value">{s.value}</span>
              <span className="banner-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="banner-grid-bg" />
    </section>
  );
};

export default Banner;
