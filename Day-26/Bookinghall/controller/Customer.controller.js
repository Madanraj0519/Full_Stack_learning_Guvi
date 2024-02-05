const CustomerRouter = require('express').Router();
const CustomerModel = require('../model/Customer.model');
const VenueModel = require('../model/Venue.model');
const BookingModel = require('../model/Booking.model');


// get the customer details
CustomerRouter.get('/', async(req, res) => {
  // console.log(CustomerModel);
try{
  const customers = await CustomerModel.find()

  res.status(200).json({
      message : "Customer data was successfully fetched",
      data : customers
  })

}catch(err){
  res.status(400).json({
    error : err.message
})
}
});


// list out the customers with booked data
CustomerRouter.get('/booked-data', async(req, res) => {
    // console.log(CustomerModel);
try{
    const customers = await CustomerModel.find({})
    .populate({
        path : "bookingID",
        model : BookingModel, 
        populate : {
            path : "venueID",
            module : VenueModel,
            select : "name",
        }    
    })
    .select({
        name : 1
    });

    if (!customers) {
        return res.status(404).json({ message: "Customer not found" });
      }

    // console.log(customers);

    const formattedData = customers.map((customer) => ({
        customerName : customer.name,
        bookingDetails : customer.bookingID.map((booking) => ({
            room : booking.venueID,
            bookingDate : booking.bookingDate,
            startTime : booking.startTime,
            endTime : booking.endTime,
            status : booking.status,
        })),
    }));

    res.status(200).json({
        message : "Customer data with booked details was successfully fetched",
        data : formattedData
    })

}catch(err){
  res.status(400).json({
    error : err.message
})
}
});


// lis out the customer with the count of booked data
CustomerRouter.get('/:customerId', async (req, res) => {
  try {
    const { customerId } = req.params;
    const customer = await CustomerModel.findOne({_id : customerId})
      .populate({
        path: "bookingID",
        model: BookingModel,
        populate : {
            path : 'venueID',
            model : VenueModel,
            select : 'name'
        }
      })
      .select({ name: 1 });

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // console.log(customer)

    const bookingCount = customer.bookingID.length;
    const formattedBookings = customer.bookingID.map(booking => ({
      bookingId : booking._id,
      bookingDate: booking.bookingDate,
      startTime: booking.startTime,
      endTime: booking.endTime,
      status: booking.status,
      roomDetails : booking.name,
      room: booking.venueID, // Assuming "venueID" is the field name in the BookingModel that references the room
    }));

    res.status(200).json({ 
        message : "Customer data with the count of booked details was successfully fetched",
        customerId,  
        customerName : customer.name,
        bookingCount,
        bookings: formattedBookings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});


// create the customer
CustomerRouter.post('/create', async(req, res) => {
    
    try{
    console.log(req.body);
    // Create a instance of data into the customer model,
    const customer = await new CustomerModel(req.body);
    // console.log(customer);
    // Now save the data in the database. Now it check the validation if anythings happens wrongly.
    // save will return the promises.
    customer.save();

    if(!customer._id){
        res.status(500).json({
            success : false,
            message : "Something went wrong"
         });
    }

    res.status(200).json({
        success : true,
        message : "Customer created successfully"
    });


    }catch(err){
        res.status(400).json({
            error : err.message,
        });
    }



    // .then((response) =>{
    //     if(response.id){
    //         res.status(200).json({
    //             success : true,
    //             message : "Customer created successfully"
    //         });
    //     }else{
    //         res.status(500).json({
    //             success : false,
    //             message : "Something went wrong"
    //         });
    //     }
    // })
    // .catch((err) => {
    //    res.status(400).json({
    //     error : err.message,
    //    });
    // });

});


module.exports = CustomerRouter;