import { Request, Response, NextFunction } from "express";
import { appError } from "./appError";

export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  if (err instanceof appError) {
    return res.status(err.statusCode).json({
      mensaje: err.message,
    });
  }


  console.error("Error no controlado:", err);

  return res.status(500).json({
    mensaje: "Error interno del servidor",
  });
};
