const { default: mongoose } = require("mongoose");
require('dotenv').config()

async function connectDatabase(){
    try{
        const response = await mongoose.connect(`${ 
            process.env.Node_Env !== 'development' ? 
            process.env.MONGODB_LOCAL_URL : process.env.MONGODB_ATLAS_URL}
            `);
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