import jwt, { SignOptions } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;
const EXPIRES_IN =
  (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) || "7d";

export interface JwtPayload {
  id: string;
  email: string;
  role: "customer" | "admin";
}

export const signToken = (payload: JwtPayload): string => {
  const options: SignOptions = {
    expiresIn: EXPIRES_IN,
  };
  return jwt.sign({ ...payload }, SECRET, options);
};
