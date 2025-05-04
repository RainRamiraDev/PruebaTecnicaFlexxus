// Extiende el tipo Request de Express para incluir datos del usuario autenticado
import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
      };
    }
  }
}

export {};
