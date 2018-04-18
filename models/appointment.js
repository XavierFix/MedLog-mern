const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// more about RegEx Patterns here https://www.regexbuddy.com/regex.html

// in order to create an appointment we will require the following: date, time
// doctor, from drop down, clinic, notes.
// new AppointmentSchema object for login purposes
const AppointmentSchema = new Schema({
  date: {
    type: Date,
    trim: true,
    required: 'Date name is required',
  },
  time: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  // this is populated by dropdown
  doctor: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  // this is populated by dropdown
  clinic: {
    type: String,
    trim: true,
    required: 'State is Required',
  },
  // `zip` must be of type String
  // `zip` will trim leading and trailing whitespace before it's saved
  // `zip` is a required field and throws a custom error message if not supplied
  // any additional requirements for this?
  zip: {
    type: Number,
    trim: true,
    required: 'Zip is Required',
  },
  notes: {
    type: String,
    trim: true,
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// Export the Appointment model
module.exports = Appointment;
