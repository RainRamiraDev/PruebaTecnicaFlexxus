import { Router } from "express";
import { register, login } from "../controllers/userController";
import { catchAsync } from "../middleware/catchAsync";

const router = Router();

// Rutas de autenticación
router.post("/register",catchAsync(register));
router.post("/login", catchAsync(login));

export default router;
