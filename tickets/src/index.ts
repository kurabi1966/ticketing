import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KET must be defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to tickets-mongo database on port 27017');
  } catch (error) {
    console.error('Could not connect to tickets-mongo database.');
  }
  app.listen(3000, () => {
    console.log('tickets Micro Service started on port 3000.');
  });
};

start();
