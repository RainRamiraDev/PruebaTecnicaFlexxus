import { DataSource } from "typeorm";
import { Articulo } from "../models/articuloModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "articulos_api",
    logging: true,
    entities: [Articulo],
    synchronize: false
});