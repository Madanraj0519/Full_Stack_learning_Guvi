const { default: mongoose } = require("mongoose");


// Schema defines what all the data we are going to provide in the database
const VenueSchema = mongoose.Schema({
    // Mongoose type validation
    name : {
        type : String,
        required : true,
    },
    seatingCapacity : {
        type : Number,
        required : true,
    },
    amenities: {                 
        type : Array,
        required : true,
    },
    pricePerHours : {
        type : Number,
        required : true,
    },
    bookingID : {
        type : [mongoose.Types.ObjectId],
        ref : "booking"
    },
});


// Creating our collection of Customer
module.exports = mongoose.model("Venue", VenueSchema);