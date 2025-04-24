const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String
  },
  contact: {
    email: String,
    phone: String,
    website: String
  },
  specializations: [{
    type: String
  }],
  facilities: [{
    type: String
  }],
  accreditations: [{
    name: String,
    year: Number,
    validUntil: Date
  }],
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  images: [{
    url: String,
    caption: String
  }],
  description: String,
  establishedYear: Number
});

module.exports = mongoose.model('Hospital', hospitalSchema);