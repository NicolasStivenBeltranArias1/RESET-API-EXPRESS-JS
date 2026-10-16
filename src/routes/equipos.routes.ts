import { Router } from 'express';
import { 
  createEquipment, 
  getEquipment, 
  updateEquipmentPatch 
} from '../controllers/equipos.controller';

const router = Router();

router.post('/', createEquipment);
router.get('/', getEquipment);
router.patch('/:id', updateEquipmentPatch); // Uso explícito de PATCH para cambios en el estado técnico[cite: 5]

export default router;