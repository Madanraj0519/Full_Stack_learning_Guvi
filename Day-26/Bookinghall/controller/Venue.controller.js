const VenueRouter = require('express').Router();
const VenueModel = require('../model/Venue.model');
const bookingModel = require('../model/Booking.model');
const CustomerModel = require('../model/Customer.model');




VenueRouter.get('/', async(req, res) => {
    // console.log(CustomerModel);
  try{
    const Venue = await VenueModel.find()
  
    res.status(200).json({
        message : "Customer data was successfully fetched",
        data : Venue 
    })
  
  }catch(err){
    res.status(400).json({
      error : err.message
  })
  }
  });


// list out the rooms with booked data
VenueRouter.get('/booked-data', async(req, res) => {
    
    try{
    const rooms = await VenueModel.find({})
    .populate({
        path : 'bookingID',
        model : bookingModel,
        populate : {
            path : "customerID",
            model : CustomerModel,
            select : 'name',
        }
    })
    .select({
        name : 1
    })
    //   console.log(rooms)

    const formattedData = rooms.map((room) => ({
        roomName : room.name,
        bookingDetails : room.bookingID.map((booking) => ({
            customer : booking.customerID,
            bookingDate : booking.bookingDate,
            bookingForDate : booking.bookingForDate,
            startTime : booking.startTime,
            endTime : booking.endTime,
            status : booking.status,
        }))
    }));

    res.status(200).json({
        message : "Room data fetched successfully",
        data : formattedData
    })
    }catch(err){
      res.status(400).json({
        error : err.message,
      });
    }
})


VenueRouter.post('/create', async(req, res) => {
   

    try{
        console.log(req.body);
        // Create a instance of data into the customer model,
        const Venue = await new VenueModel(req.body);
        // console.log(customer);
        // Now save the data in the database. Now it check the validation if anythings happens wrongly.
        // save will return the promises.
        Venue.save();

        if(!Venue._id){
            res.status(500).json({
                success : false,
                message : "Something went wrong"
            });
        }
    
        res.status(200).json({
            success : true,
            message : "Venue created successfully"
        });

    }catch(err) {
        res.status(400).json({
            error : err.message,
        });
    }
});



module.exports = VenueRouter;