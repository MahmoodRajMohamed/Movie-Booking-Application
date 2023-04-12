const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
dotenv.config();

//middleware
app.use("/user", userRouter)

mongoose.connect("mongodb+srv://mahmoodrajmohamed:Rfosm259@movie-booking.ghskmeo.mongodb.net/Movies?retryWrites=true&w=majority")

app.listen(3500, ()=>{
    
    console.log(`connected to localhost port ${3500}`);
})

// vzhZGsG9kI2Cmytd Rfosm259

// mongodb+srv://mahmoodrajmohamed:<password>@movie-booking.ghskmeo.mongodb.net/?retryWrites=true&w=majority