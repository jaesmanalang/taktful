import HttpError from '../utils/HttpError.js';

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
};

export default errorHandler;
