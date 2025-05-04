import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entities/userModel";
import { AppDataSource } from "../config/conexion";
import dotenv from "dotenv";
import{ appError } from "../middleware/error/appError"

dotenv.config();

// Repositorio de usuarios
const userRepo = AppDataSource.getRepository(User);

// Obtener el secreto del JWT desde las variables de entorno
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new appError('JWT_SECRET no está definido en el archivo .env', 500);
}

// Función para crear un token JWT
export function createToken(payload: object): string {
  // Verificar que JWT_SECRET no sea undefined
  if (!JWT_SECRET) {
    throw new appError('El secreto JWT no está disponible', 500);
  }

  // Generar el token JWT
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Puedes cambiar el tiempo de expiración según lo necesites
  return token;
}

// Servicio de registro de usuario
export const registerUserService = async (email: string, password: string) => {
  // Verificar si el usuario ya existe
  const existingUser = await userRepo.findOneBy({ email });
  if (existingUser) {
    throw new appError("El usuario ya existe",400);
  }

  // Crear un nuevo usuario
  const hashedPassword = await bcrypt.hash(password, 10); // Hash de la contraseña
  const user = userRepo.create({ email, password: hashedPassword });
  
  // Guardar el usuario en la base de datos
  await userRepo.save(user);
  
  return user;
};

// Servicio de login de usuario
export const loginUserService = async (email: string, password: string) => {
  // Buscar al usuario por su email
  const user = await userRepo.findOneBy({ email });
  if (!user) {
    throw new appError("Credenciales inválidas", 401);
  }

  // Verificar la contraseña
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new appError("Credenciales inválidas",401);
  }

  // Crear el token JWT
  const token = createToken({ id: user.id, email: user.email });

  return token;
};
