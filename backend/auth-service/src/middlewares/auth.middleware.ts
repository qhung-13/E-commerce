import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils";

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Không có token" });
    }

    const decoded = verifyToken(token);
    req.body.userId = decoded.id;
    req.body.userRole = decoded.role;
    next();
  } catch {
    return res.status(401).json({ message: "Token không hợp lệ" });
  }
};
