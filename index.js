// importing packages
const express= require('express');  // for express framework
const courseRouter = require('./routes/courses');   // for using the 'router' in 'courses.js' file
const bodyParser = require('body-parser'); // for parsing the body to json (In POST or PUT request, when we send the data in body, it will convert that into json), it will convert that into json), and return to use whenever we need
const mongoose = require('mongoose');   // for connecting with database (mongoDB)

// configuring '.env' file to access the key-value pairs I wrote in it
require('dotenv').config();

// creating object of 'express'
const app = express();

// using body-parser
app.use(bodyParser.json()); // for parsing the body to json (In POST or PUT request, when we send the data in body, it will convert that into json), and return to use whenever we need

// calling the routers as per requests
app.use("/api/v1/courses",courseRouter);    // if this url is fired, this router and all its routes will be activated 

// connecting with DB
// mongoose.connect(process.env.DB_CONNECTION_URL);    // callback is depricated for some functions in mongoose -->(Not sure about this solution) mongoose-stopped-accepting-callbacks-for-some-of-its-functions : if we still want to use, we need to use async-await
(async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URL);    
        console.log("DB Connected !!");
    } catch (error) {
        console.log("Error connecting to the DB : ", error);
    }
})();


// listening
app.listen(process.env.PORT,()=>{                   // if server successfully on the given port, the callback function will run     // to access the PORT written in '.env' file : process.env.PORT
    console.log("server started successfully!!");   
})
