import { Request, Response } from 'express';

// Listar todos los espacios físicos y laboratorios de ControlLabs
export const getEnvironments = (req: Request, res: Response): void => {
  res.status(200).json({
    status: 'success',
    message: 'Listado de ambientes y laboratorios obtenido correctamente'
  });
};

// Crear un nuevo ambiente especificando su capacidad y ubicación
export const createEnvironment = (req: Request, res: Response): void => {
  const { name, capacity, location } = req.body;
  res.status(201).json({
    status: 'success',
    message: 'Ambiente creado con éxito',
    data: { name, capacity, location }
  });
};

// Actualizar atributos específicos de un ambiente (ej. capacidad o estado operativo) vía PATCH
export const updateEnvironmentPatch = (req: Request, res: Response): void => {
  const { id } = req.params;
  const partialData = req.body; // Solo los atributos a modificar
  res.status(200).json({
    status: 'success',
    message: `Ambiente con ID ${id} actualizado parcialmente con éxito`,
    updatedFields: partialData
  });
};