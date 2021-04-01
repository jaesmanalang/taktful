import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide a first name'],
  },

  lastName: {
    type: String,
    required: [true, 'Please provide a first name'],
  },

  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
  },

  confirmPassword: {
    type: String,
    required: [true, 'Confirm password is required'],
  },

  contacts: [
    {
      contact: {
        type: Schema.Types.ObjectId,
        ref: 'Contact',
      },
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;
