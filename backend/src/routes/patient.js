const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createPatientProfile,
  getPatientProfile,
  updatePatientProfile,
  uploadMedicalDocument
} = require('../controllers/patientController');

router.use(protect);

router.route('/profile')
  .post(authorize('patient'), createPatientProfile)
  .get(authorize('patient'), getPatientProfile)
  .put(authorize('patient'), updatePatientProfile);

router.post('/documents', authorize('patient'), uploadMedicalDocument);

module.exports = router;