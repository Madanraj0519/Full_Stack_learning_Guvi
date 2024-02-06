const express = require('express');
const bodyparser = require("body-parser");
const HTTP_SERVER = express();
const PORT = 5000;
const {connectDatabase} = require('./dbConfig');

HTTP_SERVER.use(bodyparser.json());

connectDatabase();

HTTP_SERVER.listen(PORT, process.env.HOST_NAME,  () => {
    console.log(`Starting on port http://localhost:${PORT}`);
});



// It first go the index.js file and then hit the '/' go to the required './app' directory
HTTP_SERVER.use('/', require('./app'));