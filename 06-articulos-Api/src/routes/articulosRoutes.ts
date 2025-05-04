import { Router } from "express";
import { crearNuevoArticulo, filtrarArticulos, actualizarArticulo, desactivarArticulo } from "../controllers/articulosController";
import { catchAsync } from "../middleware/catchAsync";
import { protect } from "../middleware/auth/protect";

const router = Router();

router.post("/",protect ,catchAsync(crearNuevoArticulo));
router.get("/",protect, catchAsync(filtrarArticulos));
router.patch("/:id",protect, catchAsync(desactivarArticulo));
router.put("/:id",protect, catchAsync(actualizarArticulo));

export default router;
