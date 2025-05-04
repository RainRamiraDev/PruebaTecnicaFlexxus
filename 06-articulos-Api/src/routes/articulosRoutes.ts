import { Router } from "express";
import { crearArticulo, listarArticulos, actualizarArticulo, desactivarArticulo } from "../controllers/articulosController";

const router = Router();

router.post("/", crearArticulo);
router.get("/", listarArticulos);
router.put("/:id", actualizarArticulo);
router.delete("/:id", desactivarArticulo);

export default router;
