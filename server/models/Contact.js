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

  mobileNo: {
    type: String,
  },

  contactType: {
    type: String,
    enum: ['personal', 'professional'],
    default: 'personal',
  },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;