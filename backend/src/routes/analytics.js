const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  generateDailyAnalytics,
  getAnalyticsByDateRange,
  getDashboardSummary
} = require('../controllers/analyticsController');

router.use(protect);
router.use(authorize('admin'));

router.post('/generate', generateDailyAnalytics);
router.get('/range', getAnalyticsByDateRange);
router.get('/summary', getDashboardSummary);

module.exports = router;