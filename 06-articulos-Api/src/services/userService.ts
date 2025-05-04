import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import { AppDataSource } from "../db/conexion";
import dotenv from "dotenv";

dotenv.config();

// Repositorio de usuarios
const userRepo = AppDataSource.getRepository(User);

// Obtener el secreto del JWT desde las variables de entorno
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET no está definido en el archivo .env');
}

// Función para crear un token JWT
export function createToken(payload: object): string {
  // Verificar que JWT_SECRET no sea undefined
  if (!JWT_SECRET) {
    throw new Error('El secreto JWT no está disponible');
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
    throw new Error("El usuario ya existe");
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
    throw new Error("Credenciales inválidas");
  }

  // Verificar la contraseña
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Credenciales inválidas");
  }

  // Crear el token JWT
  const token = createToken({ id: user.id, email: user.email });

  return token;
};
