import { Request, Response } from "express";
import {
  crearNuevoArticuloService,
  filtrarArticulosService,
  desactivarArticuloService,
  actualizarArticuloService,
} from "../services/articulosService";

export const crearNuevoArticulo = async (req: Request, res: Response) => {
  const { nombre, marca } = req.body;
  if (!nombre || !marca) return res.status(400).json({ mensaje: "Faltan datos" });

  const articulo = await crearNuevoArticuloService(nombre, marca);
  res.status(201).json(articulo);
};

export const filtrarArticulos = async (req: Request, res: Response) => {
  const { nombre, marca, activo, exacto } = req.query;
  const articulos = await filtrarArticulosService(
    nombre as string,
    marca as string,
    activo as string,
    exacto as string
  );

  res.status(200).json(articulos);
};

export const desactivarArticulo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const articulo = await desactivarArticuloService(parseInt(id));
  res.json({ mensaje: "Artículo desactivado", articulo });
};

export const actualizarArticulo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, marca, activo } = req.body;
  const articulo = await actualizarArticuloService(parseInt(id), { nombre, marca, activo });
  res.json({ mensaje: "Artículo actualizado", articulo });
};
