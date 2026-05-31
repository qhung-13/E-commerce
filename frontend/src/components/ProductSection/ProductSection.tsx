import { useState } from "react";
import { products, categories } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductSection.css"

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="product-section">
      <div className="container">
        <div className="product-section-header">
          <h2 className="product-section-title">Sản phẩm</h2>
          <div className="product-section-categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`product-section-cat-btn ${activeCategory === cat.id ? "active" : ""}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="product-section-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
