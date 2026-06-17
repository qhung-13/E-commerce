import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "product-service" });
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
