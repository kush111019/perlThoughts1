const express = require('express');
const router = express.Router();
//const doctors = require("./doctors.js")
//console.log(doctors)
// Sample appointments data (in-memory)
const doctors = [
    { id: 1, name: 'Dr. John Doe', availableSlots: ['Monday', 'Wednesday', 'Friday'], maxPatients: 10 },
    { id: 2, name: 'Dr. Jane Smith', availableSlots: ['Tuesday', 'Thursday'], maxPatients: 8 },
  ];
let appointments = [];

// Book an appointment with a doctor
router.post('/book', (req, res) => {
  const { doctorId, slot } = req.body;
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) {
    res.status(404).json({ error: 'Doctor not found' });
  } else if (!doctor.availableSlots.includes(slot)) {
    res.status(400).json({ error: 'Invalid time slot' });
  } else if (appointments.filter((a) => a.doctorId === doctorId && a.slot === slot).length >= doctor.maxPatients) {
    res.status(400).json({ error: 'Appointment slot is full' });
  } else {
    appointments.push({ doctorId, slot });
    res.json({ message: 'Appointment booked successfully' });
  }
});

router.get('/getAppointments',(req,res) =>{
   
return res.status(200).send({status:true,message:appointments})

})

module.exports = router;