import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../data/products";
import "./ProductCard.css"

interface Props {
  product: Product;
}

const fmt = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    n,
  );

const ProductCard = ({ product }: Props) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const discount = Math.round(
    (1 - product.price / product.originalPrice) * 100,
  );

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.image} alt={product.name} />
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
        <span className="product-discount">-{discount}%</span>
      </div>

      <div className="product-card-body">
        <p className="product-name">{product.name}</p>

        <div className="product-rating">
          <span className="product-stars">
            {"★".repeat(Math.floor(product.rating))}
          </span>
          <span className="product-rating-val">{product.rating}</span>
          <span className="product-reviews">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        <div className="product-card-footer">
          <div>
            <p className="product-price">{fmt(product.price)}</p>
            <p className="product-original">{fmt(product.originalPrice)}</p>
          </div>
          <button
            className={`product-add-btn ${added ? "added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
