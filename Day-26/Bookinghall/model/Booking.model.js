const { default: mongoose } = require("mongoose");


// Schema defines what all the data we are going to provide in the database
const BookingSchema = mongoose.Schema({
    // Mongoose type validation
    customerID : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : "Customers"
    },
    venueID : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : "Venue"
    },
    bookingDate: { type : String},
    bookingForDate:{ type : String},
    startTime :{ type : Date, default : Date.now},    
    endTime : { type : Date, default : Date.now},
    status : { type : String},
});


// Creating our collection of Customer
module.exports = mongoose.model("Booking", BookingSchema );