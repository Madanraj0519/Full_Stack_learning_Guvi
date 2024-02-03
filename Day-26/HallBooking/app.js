const express = require('express');
const APP_SERVER = express();

// Inject the API controller
APP_SERVER.use("/api/customers", require('./controller/Customer.controller'));
APP_SERVER.use("/api/booking", require('./controller/Booking.controller'));
APP_SERVER.use("/api/venues", require('./controller/Venue.controller'));

module.exports = APP_SERVER