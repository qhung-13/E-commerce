import { Router } from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
  updateStatus,
  getAllOrders,
} from "../controllers/order.controller";
import { protect, adminOnly } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", protect, createOrder);
router.get("/my", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.patch("/:id/status", protect, adminOnly, updateStatus);
router.get("/", protect, adminOnly, getAllOrders);

export default router;
