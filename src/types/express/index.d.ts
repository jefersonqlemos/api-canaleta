import express from "express";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
        currentUser: Record<string | JwtPayload, any>
    }
  }
}