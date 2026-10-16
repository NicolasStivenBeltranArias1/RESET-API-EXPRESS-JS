import { Router } from 'express';
import { 
  getUsers, 
  createUser, 
  getUserById, 
  updateUserPatch, 
  deleteUser 
} from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUserPatch); 
router.delete('/:id', deleteUser);

export default router;