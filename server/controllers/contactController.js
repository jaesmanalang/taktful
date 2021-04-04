import ash from 'express-async-handler';
import HttpError from '../utils/HttpError.js';
import Contact from '../models/Contact.js';

export const getContacts = ash(async (req, res, next) => {
  const contacts = await Contact.find({ user: req.user._id });
  res.status(200).json({
    contacts,
  });
});

export const createContact = ash(async (req, res, next) => {
  const { name, email, phone, contactType } = req.body;

  const newContact = new Contact({
    user: req.user._id,
    name,
    email,
    phone,
    contactType,
  });

  const contact = await newContact.save();

  res.status(201).json({
    contact,
  });
});

export const getContact = ash(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return next(new HttpError('Contact not found', 404));

  res.status(200).json({
    contact,
  });
});

export const updateContact = ash(async (req, res, next) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!updatedContact) return next(new HttpError('Contact not found', 404));

  res.status(200).json({
    updatedContact,
  });
});

export const deleteContact = ash(async (req, res, next) => {
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);
  if (!deletedContact) return next(new HttpError('Contact not found'));

  res.status(200).json({
    deletedContact,
  });
});
