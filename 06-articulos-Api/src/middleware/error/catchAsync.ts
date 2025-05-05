import { Request, Response, NextFunction } from "express";

// Wrapper para manejar errores en funciones async sin necesidad de try-catch en cada controlador
export const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
