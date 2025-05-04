import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import articulosRoutes from './routes/articulosRoutes';
import { errorHandler } from "./middleware/errorHandler";


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log('Hola mundo');
    res.send("Hola mundo");
});

app.use("/articulos", articulosRoutes);

app.use(errorHandler);


export default app;