const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createReview,
  getHospitalReviews,
  getDoctorReviews
} = require('../controllers/reviewController');

router.use(protect);

router.post('/', createReview);
router.get('/hospital/:hospitalId', getHospitalReviews);
router.get('/doctor/:doctorId', getDoctorReviews);

module.exports = router;