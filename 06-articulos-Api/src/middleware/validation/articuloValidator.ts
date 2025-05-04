// src/validators/articuloValidator.ts
import Joi from "joi";

export const crearArticuloSchema = Joi.object({
  nombre: Joi.string().min(3).required(),
  marca: Joi.string().min(3).required(),
});

export const filtrarArticulosSchema = Joi.object({
  nombre: Joi.string().optional(),
  marca: Joi.string().optional(),
  activo: Joi.string().valid('true', 'false').optional(),
  exacto: Joi.string().valid('true', 'false').optional(),
});

export const desactivarArticuloSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});

export const actualizarArticuloSchema = Joi.object({
  nombre: Joi.string().min(3).optional(),
  marca: Joi.string().min(3).optional(),
  activo: Joi.boolean().optional(),
});
