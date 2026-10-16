import { Request, Response } from 'express';

// Registrar un nuevo equipo vinculado a un ambiente de laboratorio
export const createEquipment = (req: Request, res: Response): void => {
  const { serialNumber, type, environmentId } = req.body;
  res.status(201).json({
    status: 'success',
    message: 'Equipo registrado con éxito en el ambiente',
    data: { serialNumber, type, environmentId }
  });
};

// Listar todos los equipos existentes o filtrar por ambiente específico (?environmentId=...)
export const getEquipment = (req: Request, res: Response): void => {
  const { environmentId } = req.query;
  const message = environmentId
    ? `Listado de equipos filtrados para el ambiente ${environmentId}`
    : 'Listado general de todos los equipos existentes';

  res.status(200).json({
    status: 'success',
    message
  });
};

// Actualizar de forma parcial el estado técnico o ubicación del equipo usando PATCH
export const updateEquipmentPatch = (req: Request, res: Response): void => {
  const { id } = req.params;
  const partialData = req.body; // Ej: { technicalStatus: 'en mantenimiento' }
  res.status(200).json({
    status: 'success',
    message: `Equipo ${id} actualizado parcialmente con éxito`,
    updatedFields: partialData
  });
};