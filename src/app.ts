import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes'; // Importar el router de usuarios

const app = express();

app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Montar el Módulo de Gestión de Usuarios
app.use('/api/v1/users', userRoutes);

export default app;