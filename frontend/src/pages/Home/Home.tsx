import { useState } from "react";
import { products, categories } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="home-page">
      <div className="container">
        <div className="home-filter-bar">
          <h2 className="home-section-title">Sản phẩm</h2>
          <div className="home-categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-btn ${activeCategory === cat.id ? "active" : ""}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
