import express from 'express';
import {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// prettier-ignore
router
  .route('/')
  .get(getUsers)

// prettier-ignore
router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;
