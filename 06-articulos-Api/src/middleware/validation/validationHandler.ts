import { Request, Response, NextFunction } from "express";
import { 
  crearArticuloSchema, 
  filtrarArticulosSchema, 
  desactivarArticuloSchema, 
  actualizarArticuloSchema 
} from "./articuloValidator";
import { registerUserSchema, loginUserSchema } from "./userValidator";
import { appError } from "../error/appError";


export const validateCreateArticulo = (req: Request, res: Response, next: NextFunction) => {
  const { error } = crearArticuloSchema.validate(req.body);
  if (error) {
    return next(new appError(error.details[0].message, 400));
  }
  next();
};


export const validateFiltrarArticulos = (req: Request, res: Response, next: NextFunction) => {
  const { error } = filtrarArticulosSchema.validate(req.query);
  if (error) {
    return next(new appError(error.details[0].message, 400)); 
  }
  next();
};


export const validateDesactivarArticulo = (req: Request, res: Response, next: NextFunction) => {
  const { error } = desactivarArticuloSchema.validate(req.params);
  if (error) {
    return next(new appError(error.details[0].message, 400));
  }
  next();
};


export const validateUpdateArticulo = (req: Request, res: Response, next: NextFunction) => {
  const { error } = actualizarArticuloSchema.validate(req.body);
  if (error) {
    return next(new appError(error.details[0].message, 400));
  }
  next();
};


export const validateRegisterUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = registerUserSchema.validate(req.body);
  if (error) {
    return next(new appError(error.details[0].message, 400));
  }
  next();
};


export const validateLoginUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginUserSchema.validate(req.body);
  if (error) {
    return next(new appError(error.details[0].message, 400));
  }
  next();
};
