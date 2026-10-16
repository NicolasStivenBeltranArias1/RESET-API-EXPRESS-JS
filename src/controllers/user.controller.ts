import { Request, Response } from 'express';

//  listado usuarios
export const getUsers = (req: Request, res: Response): void => {
  //retornar usuarios
  res.status(200).json({ message: 'Listado de usuarios obtenido con éxito' });
};

// Registrar perfil usuario
export const createUser = (req: Request, res: Response): void => {
  const newUser = req.body;
  res.status(201).json({ message: 'Usuario registrado con éxito', data: newUser });
};

// Consultar los detalles de un usuario específico por ID
const getUserById = (req: Request, res: Response): void => {
  const { id } = req.params;
  res.status(200).json({ message: `Detalles del usuario con id ${id}` });
};
export { getUserById };

// Actualizar (PATCH) rol, estado o contraseña
export const updateUserPatch = (req: Request, res: Response): void => {
  const { id } = req.params;
  const partialData = req.body; // Solo los campos a modificar
  res.status(200).json({ 
    message: `Usuario ${id} actualizado parcialmente con éxito`, 
    updatedFields: partialData 
  });
};

// Eliminar usuario
export const deleteUser = (req: Request, res: Response): void => {
  const { id } = req.params;
  res.status(200).json({ message: `Usuario ${id} eliminado` });
};