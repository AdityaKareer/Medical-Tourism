const Hospital = require('../models/Hospital');
const Doctor = require('../models/Doctor');

exports.createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHospitals = async (req, res) => {
  try {
    const { specialization, city, rating } = req.query;
    let query = {};

    if (specialization) {
      query.specializations = specialization;
    }
    if (city) {
      query['address.city'] = city;
    }
    if (rating) {
      query['ratings.average'] = { $gte: parseFloat(rating) };
    }

    const hospitals = await Hospital.find(query);
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    
    const doctors = await Doctor.find({ hospitalId: hospital._id })
                               .populate('userId', 'firstName lastName');
    
    res.json({ hospital, doctors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.json(hospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};