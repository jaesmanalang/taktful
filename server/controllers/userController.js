import ash from 'express-async-handler';
import HttpError from '../utils/HttpError.js';
import generateToken from '../utils/generateToken.js';
import User from '../models/User.js';

export const register = ash(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return next(new HttpError('Email already exists', 400));

  const newUser = await User.create(req.body);
  res.status(201).json({
    message: 'Registration successful!',
    user: {
      _id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      contacts: newUser.contacts,
    },
  });
});

export const login = ash(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new HttpError('Please enter email or password', 400));

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password))) {
    return next(new HttpError('Incorrect email or password', 400));
  }

  const token = generateToken(user._id);

  res.status(200).json({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },

    token,
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
  if (!user) return next(new HttpError('User not found', 404));

  res.status(200).json({
    user,
  });
});

export const updateUser = ash(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedUser) return next(new HttpError('User not found', 404));

  res.status(200).json({
    updatedUser,
  });
});

export const deleteUser = ash(async (req, res, next) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) return next(new HttpError('User not found', 404));

  res.status(200).json({
    deletedUser,
  });
});
