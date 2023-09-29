const express = require('express');
const router = express.Router();

// Sample doctors data (in-memory)
const doctors = [
  { id: 1, name: 'Dr. John Doe', availableSlots: ['Monday', 'Wednesday', 'Friday'], maxPatients: 10 },
  { id: 2, name: 'Dr. Jane Smith', availableSlots: ['Tuesday', 'Thursday'], maxPatients: 8 },
];

// List all doctors
router.get('/', (req, res) => {
  res.json(doctors);
});

// Get doctor details by ID
router.get('/:id', (req, res) => {
  const doctorId = parseInt(req.params.id);
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) {
    res.status(404).json({ error: 'Doctor not found' });
  } else {
    res.json(doctor);
  }
});

module.exports = router;