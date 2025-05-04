// src/types/user.d.ts
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

export {};  // Asegúrate de tener esto para que sea tratado como un módulo
