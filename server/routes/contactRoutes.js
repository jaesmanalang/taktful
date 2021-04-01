import express from 'express';
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
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

export default router;
