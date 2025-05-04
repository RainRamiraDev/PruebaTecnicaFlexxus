import { Router } from "express";
import { crearNuevoArticulo, filtrarArticulos, actualizarArticulo, desactivarArticulo } from "../controllers/articulosController";

const router = Router();

router.post("/", crearNuevoArticulo);
router.get("/", filtrarArticulos);
router.put("/:id", actualizarArticulo);
router.delete("/:id", desactivarArticulo);

export default router;
