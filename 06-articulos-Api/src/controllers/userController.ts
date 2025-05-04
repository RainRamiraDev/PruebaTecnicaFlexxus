import { Request, Response } from "express";
import { registerUserService, loginUserService } from "../services/userService";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

    const user = await registerUserService(email, password);
    res.status(201).json({ mensaje: "Usuario creado", user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
    const token = await loginUserService(email, password);
    res.json({ token });
};
