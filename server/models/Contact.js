import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  name: {
    type: String,
    required: [true, 'Please provide a contact name'],
  },

  email: {
    type: String,
  },

  phone: {
    type: String,
  },

  contactType: {
    type: String,
    enum: ['Personal', 'Professional'],
    default: 'Personal',
  },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
