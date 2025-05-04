import { Router } from "express";
import { crearNuevoArticulo, filtrarArticulos, actualizarArticulo, desactivarArticulo } from "../controllers/articulosController";
import { catchAsync } from "../middleware/error/catchAsync";
import { protect } from "../middleware/auth/protect";
import {
    validateCreateArticulo,
    validateFiltrarArticulos,
    validateDesactivarArticulo,
    validateUpdateArticulo,
  } from "../middleware/validation/validationHandler";

const router = Router();

router.post("/",protect ,validateCreateArticulo, catchAsync(crearNuevoArticulo));
router.get("/",protect,validateFiltrarArticulos, catchAsync(filtrarArticulos));
router.patch("/:id",protect,validateDesactivarArticulo, catchAsync(desactivarArticulo));
router.put("/:id",protect,validateUpdateArticulo, catchAsync(actualizarArticulo));

export default router;
