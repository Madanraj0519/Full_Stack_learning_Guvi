const BookingRouter = require('express').Router();
const BookingModel = require('../model/Booking.model');
const VenueModel = require('../model/Venue.model');
const CustomerModel = require('../model/Customer.model');


BookingRouter.get('/', async(req, res) => {
    // populate the data with the particular id

    try{
        const booking = await BookingModel.find({});

       if(!booking){
        res.status(404).json({
            message: 'Booking not found'
        })
       }

        res.status(200).json({
           message : "Booking fetched Successful!!",
           data : booking,
        });

        // console.log(booking);
    
    }catch(err){
        res.status(500).json({
            error: err.message,
        });
    }
});


BookingRouter.post('/create', async(req, res) => {
    // console.log(req.body);
    try{
        const booking = await new BookingModel(req.body);
    
        booking.save()

        if(!booking._id){
            res.status(500).json({
                success : false,
                message : "Something went wrong"
            });
        }


        if(!booking.bookingForDate){
            res.status(200).json({
                success : true,
                message : "booking is already created"
            });

        }else{
            res.status(200).json({
                success : true,
                message : "booking created successfully"
            });
        }

    }catch(err){
        res.status(400).json({
            error : err.message,
           });
    }

});

module.exports = BookingRouter;