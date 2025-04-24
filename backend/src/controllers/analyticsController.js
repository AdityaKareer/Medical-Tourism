const Analytics = require('../models/Analytics');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Review = require('../models/Review');

exports.generateDailyAnalytics = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointments = await Appointment.find({
      appointmentDate: {
        $gte: today,
        $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
      }
    });

    const newPatients = await Patient.countDocuments({
      createdAt: {
        $gte: today,
        $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
      }
    });

    const metrics = {
      totalAppointments: appointments.length,
      completedAppointments: appointments.filter(a => a.status === 'completed').length,
      cancelledAppointments: appointments.filter(a => a.status === 'cancelled').length,
      newPatients,
      revenue: appointments.reduce((acc, curr) => acc + (curr.paymentStatus === 'completed' ? 1 : 0), 0),
      averageRating: await calculateAverageRating()
    };

    const analytics = await Analytics.create({
      date: today,
      metrics,
      topHospitals: await getTopHospitals(),
      topDoctors: await getTopDoctors(),
      treatmentStats: await getTreatmentStats()
    });

    res.status(201).json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAnalyticsByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const analytics = await Analytics.find({
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      }
    })
    .populate('topHospitals.hospitalId', 'name')
    .populate('topDoctors.doctorId', 'userId');

    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDashboardSummary = async (req, res) => {
  try {
    const lastThirtyDays = new Date();
    lastThirtyDays.setDate(lastThirtyDays.getDate() - 30);

    const analytics = await Analytics.find({
      date: { $gte: lastThirtyDays }
    });

    const summary = {
      totalPatients: await Patient.countDocuments(),
      monthlyAppointments: analytics.reduce((acc, curr) => acc + curr.metrics.totalAppointments, 0),
      monthlyRevenue: analytics.reduce((acc, curr) => acc + curr.metrics.revenue, 0),
      averageRating: analytics.reduce((acc, curr) => acc + curr.metrics.averageRating, 0) / analytics.length,
      topPerformers: await getTopPerformers()
    };

    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};