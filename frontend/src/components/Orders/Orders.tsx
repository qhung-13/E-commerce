import { mockOrders } from "../../data/orders";
import "./Orders.css";

const fmt = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    n,
  );

const Orders = () => {
  return (
    <div className="orders-page">
      <div className="container">
        <h1 className="orders-title">Đơn hàng của tôi</h1>

        {mockOrders.length === 0 ? (
          <div className="orders-empty">
            <span>📦</span>
            <p>Bạn chưa có đơn hàng nào</p>
          </div>
        ) : (
          <div className="orders-list">
            {mockOrders.map((order) => (
              <div key={order.id} className="order-card">
                {/* Header */}
                <div className="order-card-header">
                  <div>
                    <p className="order-id">{order.id}</p>
                    <p className="order-date">Đặt ngày {order.date}</p>
                  </div>
                  <span className={`order-status ${order.status}`}>
                    {order.statusText}
                  </span>
                </div>

                {/* Items */}
                <div className="order-card-items">
                  {order.items.map((item) => (
                    <div key={item.name} className="order-item-row">
                      <span className="order-item-name">{item.name}</span>
                      <span className="order-item-qty">x{item.qty}</span>
                      <span className="order-item-price">
                        {fmt(item.price)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="order-card-footer">
                  <span className="order-total-label">Tổng đơn hàng</span>
                  <span className="order-total">{fmt(order.total)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
