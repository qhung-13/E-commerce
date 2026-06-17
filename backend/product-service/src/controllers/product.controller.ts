import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { products } from "../models/product.model";

export const getAll = (req: Request, res: Response) => {
  const { category, search } = req.query;

  let result = [...products];

  if (category && category !== "all") {
    result = result.filter((p) => p.category === category);
  }

  if (search) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes((search as string).toLowerCase()),
    );
  }

  return res.json({ products: result, total: result.length });
};

export const getById = (req: Request, res: Response) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }
  return res.json({ product });
};

export const create = (req: Request, res: Response) => {
  const {
    name,
    description,
    price,
    originalPrice,
    stock,
    category,
    image,
    badge,
  } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    description: description || "",
    price: Number(price),
    originalPrice: Number(originalPrice) || Number(price),
    stock: Number(stock) || 0,
    category,
    image: image || "",
    badge,
    rating: 0,
    reviews: 0,
    createdAt: new Date(),
  };

  products.push(newProduct);
  return res
    .status(201)
    .json({ message: "Tạo sản phẩm thành công", product: newProduct });
};

export const update = (req: Request, res: Response) => {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }

  products[index] = { ...products[index], ...req.body };
  return res.json({ message: "Cập nhật thành công", product: products[index] });
};

export const remove = (req: Request, res: Response) => {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }

  products.splice(index, 1);
  return res.json({ message: "Xóa sản phẩm thành công" });
};
