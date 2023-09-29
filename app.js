const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Import route handlers
const doctorsRoutes = require('./routes/doctors');
const appointmentsRoutes = require('./routes/appointments');

// Define routes
app.use('/doctors', doctorsRoutes);
app.use('/appointments', appointmentsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});