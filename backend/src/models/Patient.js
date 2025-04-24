const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dateOfBirth: Date,
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  bloodGroup: String,
  medicalHistory: [{
    condition: String,
    diagnosis: String,
    year: Number
  }],
  documents: [{
    title: String,
    fileUrl: String,
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  nationality: String,
  passportNumber: String,
  preferredLanguage: String
});

module.exports = mongoose.model('Patient', patientSchema);