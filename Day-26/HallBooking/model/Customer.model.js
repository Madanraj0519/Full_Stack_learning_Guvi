const { default: mongoose } = require("mongoose");


// Schema defines what all the data we are going to provide in the database
const CustomerSchema = mongoose.Schema({
    // Mongoose type validation
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    state : {                 
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    town: {
        type : String,
        required : true,
    },
    addresses: {
        type : String,
        required : true,
    },
    bookingID : {
        type : [mongoose.Types.ObjectId],
        ref : "booking"
    },
});


// Creating our collection of Customer
module.exports = mongoose.model("Customers", CustomerSchema);