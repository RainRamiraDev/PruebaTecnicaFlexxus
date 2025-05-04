import { DataSource } from "typeorm";
import { Articulo } from "../entities/articuloModel";
import { User } from "../entities/userModel";
import dotenv from "dotenv";

dotenv.config(); // Asegúrate de cargar las variables de entorno

// Verificar que las variables de entorno esenciales estén presentes
const requiredEnvVars = ['DB_HOST', 'DB_PORT', 'DB_USERNAME', 'DB_PASSWORD', 'DB_DATABASE'];

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Missing environment variable: ${varName}`);
  }
});

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!, 10), // Convertimos DB_PORT a un número entero
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE!,
  logging: true,
  entities: [Articulo, User],
  synchronize: false
});

// Verificar la conexión a la base de datos
AppDataSource.initialize()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);  // Terminar el proceso si no se puede conectar
  });
