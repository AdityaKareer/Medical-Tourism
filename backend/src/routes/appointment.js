const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createAppointment,
  getPatientAppointments,
  getDoctorAppointments,
  updateAppointmentStatus
} = require('../controllers/appointmentController');

router.use(protect);

router.route('/')
  .post(authorize('patient'), createAppointment)
  .get(authorize('patient'), getPatientAppointments);

router.get('/doctor', authorize('doctor'), getDoctorAppointments);

router.patch('/:id/status', 
  authorize('doctor', 'admin'), 
  updateAppointmentStatus
);

module.exports = router;