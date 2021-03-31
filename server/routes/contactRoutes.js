import express from 'express';
import {
  getContacts,
  createContact,
} from '../controllers/contactController.js';

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .get(getContacts)
  .post(createContact);

export default router;
