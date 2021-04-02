import jwt from 'jsonwebtoken';
import ash from 'express-async-handler';
import User from '../models/User.js';

export const protect = ash(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      message: 'Please log in to get access',
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  req.user = currentUser;
  next();
});

export default protect;
