
import { AppDataSource } from "../config/conexion";
import{ appError } from "../middleware/error/appError"
import { Articulo } from "../entities/articuloModel";
import { Like } from "typeorm";

const repo = AppDataSource.getRepository(Articulo);

export const crearNuevoArticuloService = async (nombre: string, marca: string) => {

  if (!nombre.trim() || !marca.trim()) {
    throw new appError("Faltan datos para crear el artículo", 400);
  }


  const articulo = repo.create({ nombre: nombre.trim(), marca: marca.trim() });
  return await repo.save(articulo);
};

export const filtrarArticulosService = async (
  nombre?: string,
  marca?: string,
  activo?: string,
  exacto?: string
) => {
  const filtros: any = {};

  if (nombre) {
    filtros.nombre = exacto === "true" ? nombre : Like(`%${nombre}%`);
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

  if (!articulos.length) {
    throw new appError("No se encontraron artículos", 404);
  }

  return articulos;
};

export const desactivarArticuloService = async (id: number) => {
  const articulo = await repo.findOneBy({ id });
  if (!articulo) {
    throw new appError("Artículo no encontrado", 404);
  }

  articulo.activo = false;
  return await repo.save(articulo);
};

export const actualizarArticuloService = async (
  id: number,
  datos: { nombre?: string; marca?: string; activo?: boolean }
) => {
  const articulo = await repo.findOneBy({ id });
  if (!articulo) {
    throw new appError("Artículo no encontrado", 404);
  }

  if (datos.nombre !== undefined) articulo.nombre = datos.nombre.trim();
  if (datos.marca !== undefined) articulo.marca = datos.marca.trim();
  if (datos.activo !== undefined) articulo.activo = datos.activo;

  return await repo.save(articulo);
};
