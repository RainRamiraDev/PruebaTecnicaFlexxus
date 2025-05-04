import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entities/userModel";
import { AppDataSource } from "../config/conexion";
import dotenv from "dotenv";
import{ appError } from "../middleware/error/appError"
dotenv.config();


const userRepo = AppDataSource.getRepository(User);

// Verificación temprana de la variable de entorno crítica
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new appError('JWT_SECRET no está definido en el archivo .env', 500);
}

// Genera un token JWT con vencimiento de 1 hora
export function createToken(payload: object): string {
  if (!JWT_SECRET) {
    throw new appError('El secreto JWT no está disponible', 500);
  }
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); 
  return token;
}


export const registerUserService = async (email: string, password: string) => {
  const existingUser = await userRepo.findOneBy({ email });
  if (existingUser) {
    throw new appError("El usuario ya existe",400);
  }

 // Encriptar contraseña antes de guardar
  const hashedPassword = await bcrypt.hash(password, 10); // Hash de la contraseña
  const user = userRepo.create({ email, password: hashedPassword });
  await userRepo.save(user);
  return user;
};


export const loginUserService = async (email: string, password: string) => {

  const user = await userRepo.findOneBy({ email });
  if (!user) {
    throw new appError("Credenciales inválidas", 401);
  }

  // Comparar contraseña hasheada
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new appError("Credenciales inválidas",401);
  }
  const token = createToken({ id: user.id, email: user.email });
  return token;
};
