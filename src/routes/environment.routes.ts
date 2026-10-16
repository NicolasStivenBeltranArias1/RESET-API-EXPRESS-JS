import { Router } from 'express';
import { 
  getEnvironments, 
  createEnvironment, 
  updateEnvironmentPatch 
} from '../controllers/environment.controller';

const router = Router();

router.get('/', getEnvironments);
router.post('/', createEnvironment);
router.patch('/:id', updateEnvironmentPatch); // Verbo PATCH para modificaciones parciales[cite: 5, 7]

export default router;