const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createHospital,
  getHospitals,
  getHospitalById,
  updateHospital
} = require('../controllers/hospitalController');

router.route('/')
  .get(getHospitals)
  .post(protect, authorize('admin'), createHospital);

router.route('/:id')
  .get(getHospitalById)
  .put(protect, authorize('admin', 'hospital'), updateHospital);

module.exports = router;