const FAQ = require('../models/Faq');

exports.createFAQ = async (req, res) => {
  try {
    const faq = await FAQ.create(req.body);
    res.status(201).json(faq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFAQs = async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category, isActive: true } : { isActive: true };
    const faqs = await FAQ.find(query);
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};