const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  metrics: {
    totalAppointments: Number,
    completedAppointments: Number,
    cancelledAppointments: Number,
    newPatients: Number,
    revenue: Number,
    averageRating: Number
  },
  topHospitals: [{
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital'
    },
    appointmentCount: Number,
    revenue: Number
  }],
  topDoctors: [{
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor'
    },
    appointmentCount: Number,
    rating: Number
  }],
  treatmentStats: [{
    type: String,
    count: Number,
    revenue: Number
  }]
});

module.exports = mongoose.model('Analytics', analyticsSchema);