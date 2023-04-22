const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();


//middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);

// mongoose.connect("mongodb+srv://mahmoodrajmohamed:Rfosm259@movie-booking.ghskmeo.mongodb.net/Movies?retryWrites=true&w=majority")
mongoose.connect("mongodb://mahmoodrajmohamed:Rfosm259@ac-7s5mmfc-shard-00-00.ghskmeo.mongodb.net:27017,ac-7s5mmfc-shard-00-01.ghskmeo.mongodb.net:27017,ac-7s5mmfc-shard-00-02.ghskmeo.mongodb.net:27017/Movies?ssl=true&replicaSet=atlas-12k776-shard-0&authSource=admin&retryWrites=true&w=majority")

app.listen(4500, ()=>{
    
    console.log(`connected to localhost port ${4500}`);
})

// vzhZGsG9kI2Cmytd Rfosm259

// mongodb+srv://mahmoodrajmohamed:<password>@movie-booking.ghskmeo.mongodb.net/?retryWrites=true&w=majority
