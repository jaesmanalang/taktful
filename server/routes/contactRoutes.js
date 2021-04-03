import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .get(getContacts)
  .post(createContact);

// prettier-ignore
router
  .route('/:id')
  .get(protect, getContact)
  .put(protect, updateContact)
  .delete(protect, deleteContact);

export default router;
