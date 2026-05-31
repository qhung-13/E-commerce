import { featuredCategories } from "../../data/products";
import "./FeaturedCategories.css";

const FeaturedCategories = () => {
  return (
    <section className="featured-cats">
      <div className="container">
        <h2 className="featured-cats-title">Danh mục nổi bật</h2>
        <div className="featured-cats-grid">
          {featuredCategories.map((cat) => (
            <div
              key={cat.id}
              className="featured-cat-card"
              style={{ "--cat-color": cat.color } as React.CSSProperties}
            >
              <div className="featured-cat-icon-wrap">
                <span className="featured-cat-icon">{cat.icon}</span>
              </div>
              <span className="featured-cat-name">{cat.name}</span>
              <span className="featured-cat-count">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
