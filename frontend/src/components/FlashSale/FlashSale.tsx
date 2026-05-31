import { flashSaleProducts} from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import useCountdown from "../../hooks/useCountdown";
import "./FlashSale.css";

const pad = (n: number) => String(n).padStart(2, "0");

const FlashSale = () => {
  const { hours, minutes, seconds } = useCountdown(5);

  return (
    <section className="flash-sale">
      <div className="container">
        <div className="flash-sale-header">
          <div className="flash-sale-title-wrap">
            <span className="flash-sale-icon">⚡</span>
            <h2 className="flash-sale-title">Flash Sale</h2>
          </div>

          <div className="flash-sale-countdown">
            <span className="flash-sale-countdown-label">Kết thúc sau</span>
            <div className="flash-sale-timer">
              <div className="timer-block">
                <span className="timer-num">{pad(hours)}</span>
                <span className="timer-label">Giờ</span>
              </div>
              <span className="timer-sep">:</span>
              <div className="timer-block">
                <span className="timer-num">{pad(minutes)}</span>
                <span className="timer-label">Phút</span>
              </div>
              <span className="timer-sep">:</span>
              <div className="timer-block">
                <span className="timer-num">{pad(seconds)}</span>
                <span className="timer-label">Giây</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flash-sale-grid">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
