import { Request, Response, NextFunction } from "express";

export function AuthGuard(req: Request, res: Response, next: NextFunction) {
  if (req.headers.authorization) {
    // Here you would normally check the token
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
