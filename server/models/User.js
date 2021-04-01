import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

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
    required: [true, 'User must have an email address'],
    unique: [true, 'Email address is already taken'],
    validate: [validator.isEmail, 'Please provide a valid email'],
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Minimum of 8 characters'],
    select: false,
  },

  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
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

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
