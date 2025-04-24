const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { createFAQ, getFAQs } = require('../controllers/faqController');

router.get('/', getFAQs);
router.post('/', protect, authorize('admin'), createFAQ);

module.exports = router;