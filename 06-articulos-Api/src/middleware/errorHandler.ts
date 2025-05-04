import { Request, Response, NextFunction } from "express";
import { appError } from "./appError";

// Middleware de manejo de errores
export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  // Si el error es una instancia de appError (error personalizado)
  if (err instanceof appError) {
    return res.status(err.statusCode).json({
      mensaje: err.message,  // El mensaje personalizado que se pasa al error
    });
  }

  // Si es un error no controlado
  console.error("Error no controlado:", err);

  return res.status(500).json({
    mensaje: "Error interno del servidor", // Mensaje genérico para errores no controlados
  });
};
