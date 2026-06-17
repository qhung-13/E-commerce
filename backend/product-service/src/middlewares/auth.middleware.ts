import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  email: string;
  role: "customer" | "admin";
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Không có token" });
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    req.body.userId = decoded.id;
    req.body.userRole = decoded.role;
    next();
  } catch {
    return res.status(401).json({ message: "Token không hợp lệ" });
  }
};

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.userRole !== "admin") {
    return res.status(403).json({ message: "Không có quyền truy cập" });
  }
  next();
};
