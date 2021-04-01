import User from '../models/User.js';
import ash from 'express-async-handler';

export const createUser = ash(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).json({ message: 'Email already exist' });

  const newUser = await User.create(req.body);
  res.status(201).json({
    newUser,
  });
});

export const getUsers = ash(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    users,
  });
});

export const getUser = ash(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.status(200).json({
    user,
  });
});

export const updateUser = ash(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedUser) return res.status(404).json({ message: 'User not found' });

  res.status(200).json({
    updatedUser,
  });
});

export const deleteUser = ash(async (req, res, next) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser)
    return res.status(404).json({
      message: 'User not found',
    });

  res.status(200).json({
    deletedUser,
  });
});
