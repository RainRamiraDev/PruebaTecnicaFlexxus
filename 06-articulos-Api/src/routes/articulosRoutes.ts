import { Router } from "express";
import { crearNuevoArticulo, filtrarArticulos, actualizarArticulo, desactivarArticulo } from "../controllers/articulosController";
import { catchAsync } from "../middleware/catchAsync";

const router = Router();

router.post("/", catchAsync(crearNuevoArticulo));
router.get("/", catchAsync(filtrarArticulos));
router.patch("/:id", catchAsync(desactivarArticulo));
router.put("/:id", catchAsync(actualizarArticulo));

export default router;
