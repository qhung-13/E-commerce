import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import { useCartStore } from "../../store/cartStore";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductDetail.css";

const fmt = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    n,
  );

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div className="product-detail-notfound">
        <p>Không tìm thấy sản phẩm</p>
        <button onClick={() => navigate("/")}>Về trang chủ</button>
      </div>
    );

  const discount = Math.round(
    (1 - product.price / product.originalPrice) * 100,
  );
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="product-detail-breadcrumb">
          <button onClick={() => navigate("/")}>Trang chủ</button>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        {/* Main */}
        <div className="product-detail-main">
          {/* Ảnh */}
          <div className="product-detail-img-wrap">
            <img src={product.image} alt={product.name} />
            <span className="product-detail-discount">-{discount}%</span>
          </div>

          {/* Info */}
          <div className="product-detail-info">
            {product.badge && (
              <span className="product-detail-badge">{product.badge}</span>
            )}

            <h1 className="product-detail-name">{product.name}</h1>

            <div className="product-detail-rating">
              <span className="product-detail-stars">
                {"★".repeat(Math.floor(product.rating))}
              </span>
              <span className="product-detail-rating-val">
                {product.rating}
              </span>
              <span className="product-detail-reviews">
                {product.reviews.toLocaleString()} đánh giá
              </span>
              <span className="product-detail-stock">
                • Còn {product.stock} sản phẩm
              </span>
            </div>

            <div className="product-detail-price-block">
              <span className="product-detail-price">{fmt(product.price)}</span>
              <span className="product-detail-original">
                {fmt(product.originalPrice)}
              </span>
              <span className="product-detail-save">
                Tiết kiệm {fmt(product.originalPrice - product.price)}
              </span>
            </div>

            <p className="product-detail-desc">{product.description}</p>

            <div className="product-detail-specs">
              {product.specs.map((s) => (
                <span key={s} className="product-detail-spec-tag">
                  {s}
                </span>
              ))}
            </div>

            {/* Số lượng */}
            <div className="product-detail-qty-row">
              <span className="product-detail-qty-label">Số lượng</span>
              <div className="product-detail-qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="product-detail-actions">
              <button
                className={`product-detail-add-btn ${added ? "added" : ""}`}
                onClick={handleAdd}
              >
                {added ? "✓ Đã thêm vào giỏ!" : "Thêm vào giỏ hàng"}
              </button>
              <button className="product-detail-wishlist-btn">♡</button>
            </div>

            {/* Delivery info */}
            <div className="product-detail-delivery">
              {[
                { icon: "🚚", text: "Giao hàng nhanh 2 giờ" },
                { icon: "🔄", text: "Đổi trả miễn phí 30 ngày" },
                { icon: "🛡️", text: "Bảo hành chính hãng" },
              ].map((d) => (
                <div key={d.text} className="product-detail-delivery-row">
                  <span>{d.icon}</span>
                  <span>{d.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="product-detail-related">
            <h2 className="product-detail-related-title">Sản phẩm liên quan</h2>
            <div className="product-detail-related-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
