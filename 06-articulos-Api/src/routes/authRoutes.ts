import { Router } from "express";
import { register, login } from "../controllers/userController";
import { catchAsync } from "../middleware/error/catchAsync";
import {
    validateRegisterUser,
    validateLoginUser
  } from "../middleware/validation/validationHandler";

const router = Router();

// Rutas de autenticación
router.post("/register",validateRegisterUser, catchAsync(register));
router.post("/login",validateLoginUser, catchAsync(login));

export default router;
