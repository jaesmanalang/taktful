import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/v1/contacts', contactRoutes);
app.use('/api/v1/users', userRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port:${port}`);
});
