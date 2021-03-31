import ash from 'express-async-handler';
import Contact from '../models/Contact.js';

export const getContacts = ash(async (req, res, next) => {
  const contacts = await Contact.find({});
  res.status(200).json({
    contacts,
  });
});

export const createContact = ash(async (req, res, next) => {
  const createdContact = await Contact.create(req.body);
  if (!createdContact)
    return res.status(400).json({ message: 'Cannot create a contact' });

  res.status(201).json({
    createdContact,
  });
});
