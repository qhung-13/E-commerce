import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { users } from "../models/user.model";
import { signToken } from "../utils/jwt.utils";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: "Vui lòng điền đầy đủ thông tin" });
    }

    const existing = users.find((u) => u.email === email);
    if (existing) {
      return res.status(400).json({ message: "Email đã được sử dụng" });
    }

    const hashed = await bcrypt.hash(password, 12);

    const newUser = {
      id: uuidv4(),
      email,
      password: hashed,
      name,
      role: "customer" as const,
      createdAt: new Date(),
    };

    users.push(newUser);

    const token = signToken({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    return res.status(201).json({
      message: "Đăng ký thành công",
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Vui lòng điền đầy đủ thông tin" });
    }

    const user = users.find((u) => u.email === email);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không đúng" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không đúng" });
    }

    const token = signToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return res.json({
      message: "Đăng nhập thành công",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = users.find((u) => u.id === req.body.userId);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy user" });
    }
    return res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
};
