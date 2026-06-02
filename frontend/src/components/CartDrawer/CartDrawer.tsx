import { useCartStore } from "../../store/cartStore";
import "./CartDrawer.css";

const fmt = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    n,
  );

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQty, clearCart } =
    useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={closeCart} />}

      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div>
            <h2 className="cart-drawer-title">Giỏ hàng</h2>
            {count > 0 && <p className="cart-drawer-count">{count} sản phẩm</p>}
          </div>
          <button className="cart-drawer-close" onClick={closeCart}>
            ✕
          </button>
        </div>

        {/* Empty */}
        {items.length === 0 ? (
          <div className="cart-drawer-empty">
            <span className="cart-drawer-empty-icon">🛒</span>
            <p>Giỏ hàng trống</p>
            <span>Hãy thêm sản phẩm vào giỏ hàng</span>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="cart-drawer-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />

                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">{fmt(item.price)}</p>

                    <div className="cart-item-qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="cart-item-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="cart-drawer-footer">
              <div className="cart-drawer-total">
                <span>Tổng cộng</span>
                <span className="cart-drawer-total-amount">{fmt(total)}</span>
              </div>
              <button className="cart-drawer-checkout-btn">
                Thanh toán ngay →
              </button>
              <button className="cart-drawer-clear-btn" onClick={clearCart}>
                Xóa giỏ hàng
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
