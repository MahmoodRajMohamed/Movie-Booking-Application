const mongoose = require('mongoose');
const Movie = require('../models/Movies');
const User = require('../models/User');

const Booking = async (req, res, next) => {
    const {movie, date, seatNumber, user} = req.body;

    let existingMovie;
    let existingUser;

    try{
        existingMovie = await Movie.findById(movie);
        existingUser = await User.findById(user);
        console.log(existingMovie,existingUser);
    }catch(err){
        return console.log(err);
    }
}

