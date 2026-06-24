import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { orders } from "../models/order.model";

export const createOrder = (req: Request, res: Response) => {
  try {
    const { items, address, userId } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Giỏ hàng trống" });
    }

    if (!address) {
      return res
        .status(400)
        .json({ message: "Vui lòng nhập địa chỉ giao hàng" });
    }

    const total = items.reduce(
      (sum: number, item: { price: number; qty: number }) =>
        sum + item.price * item.qty,
      0,
    );

    const newOrder = {
      id: uuidv4(),
      userId,
      items,
      total,
      status: "pending" as const,
      address,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    orders.push(newOrder);

    return res.status(201).json({
      message: "Đặt hàng thành công",
      order: newOrder,
    });
  } catch {
    return res.status(500).json({ message: "Lỗi server" });
  }
};

export const getMyOrders = (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const myOrders = orders
      .filter((o) => o.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return res.json({ orders: myOrders, total: myOrders.length });
  } catch {
    return res.status(500).json({ message: "Lỗi server" });
  }
};

export const getOrderById = (req: Request, res: Response) => {
  try {
    const { userId, userRole } = req.body;
    const order = orders.find((o) => o.id === req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }

    // Chỉ cho xem đơn của mình, trừ admin
    if (order.userId !== userId && userRole !== "admin") {
      return res.status(403).json({ message: "Không có quyền truy cập" });
    }

    return res.json({ order });
  } catch {
    return res.status(500).json({ message: "Lỗi server" });
  }
};

export const updateStatus = (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const index = orders.findIndex((o) => o.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }

    orders[index].status = status;
    orders[index].updatedAt = new Date();

    return res.json({
      message: "Cập nhật trạng thái thành công",
      order: orders[index],
    });
  } catch {
    return res.status(500).json({ message: "Lỗi server" });
  }
};

export const getAllOrders = (req: Request, res: Response) => {
  try {
    const sorted = [...orders].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
    return res.json({ orders: sorted, total: sorted.length });
  } catch {
    return res.status(500).json({ message: "Lỗi server" });
  }
};
