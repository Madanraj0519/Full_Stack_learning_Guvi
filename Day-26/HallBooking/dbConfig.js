const { default: mongoose } = require("mongoose");

async function connectDatabase(){
    try{
        const response = await mongoose.connect("mongodb://127.0.0.1:27017/bookings");
        if(response.connections.length > 0){
            console.log('Database connection successfully established');
        }else{
            throw new Error('Database connection failed');
        }
    }catch(e){
        console.log(e);
    }
};

module.exports = {connectDatabase}