import { Request, Response } from "express";
import { AppDataSource } from "../db/conexion";
import { Articulo } from "../models/articuloModel";
import { Like } from "typeorm"; 

const repo = AppDataSource.getRepository(Articulo);

export const crearArticulo = async (req: Request, res: Response) => {
  const { nombre, marca } = req.body;
  if (!nombre || !marca) return res.status(400).json({ mensaje: "Faltan datos" });

  const articulo = repo.create({ nombre, marca });
  await repo.save(articulo);
  res.status(201).json(articulo);
};

export const listarArticulos = async (req: Request, res: Response) => {
  const { nombre, marca, activo, exacto } = req.query;

  try {
    const filtros: any = {};
    if (nombre) {
      if (exacto === "true") {
        filtros.nombre = nombre;
      } else {
        filtros.nombre = Like(`%${nombre}%`);
      }
    }

    if (marca) {
      filtros.marca = Like(`%${marca}%`);
    }

    if (activo !== undefined) {
      filtros.activo = activo === "true"; 
    }

    const articulos = await repo.find({
      where: filtros,
      withDeleted: true, 
    });

    res.status(200).json(articulos);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ mensaje: error.message });
    } else {
      res.status(500).json({ mensaje: "Ha ocurrido un error desconocido" });
    }
  }
};

export const desactivarArticulo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const articulo = await repo.findOneBy({ id: parseInt(id) });

  if (!articulo) return res.status(404).json({ mensaje: "Artículo no encontrado" });

  articulo.activo = false;
  await repo.save(articulo);

  res.json({ mensaje: "Artículo desactivado", articulo });
};

export const actualizarArticulo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const articulo = await repo.findOneBy({ id: parseInt(id) });

  if (!articulo) return res.status(404).json({ mensaje: "Artículo no encontrado" });

  const { nombre, marca, activo } = req.body;

  if (nombre !== undefined) articulo.nombre = nombre;
  if (marca !== undefined) articulo.marca = marca;
  if (activo !== undefined) articulo.activo = activo;

  await repo.save(articulo);

  res.json({ mensaje: "Artículo actualizado", articulo });
};
