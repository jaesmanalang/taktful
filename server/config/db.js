import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.connection.on('error', err => {
    console.error(err);
  });

  mongoose.connection.on('connected', () => {
    console.log('MongoDB connection established');
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.error(`Initial connection error: ${err}`);
    process.exit(1);
  }
};

export default connectDB;
