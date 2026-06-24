import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import orderRoutes from "./routes/order.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/orders", orderRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "order-service" });
});

app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
