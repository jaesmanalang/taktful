import express from 'express';
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// prettier-ignore
router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;
