const Movie = require('../models/Movies');
const admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const addMovie = async (req, res, next) => {
    const extractedToken = req.headers.authorization.split(" ")[1];               

    if(!extractedToken && extractedToken.trim() === "") {
    return res.status(404).json({message : "Token not found"});
    }

    let adminId;


    //verify token
    jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted)=>{
        if (err) {
            return res.status(400).json({message:`${err.message}`});
        }
        else {
            adminId = decrypted.id;
            return;
        }
    })                           
    //create new movie

    const{title, description, releaseDate, posterUrl, featured, actors} =req.body;

    if(
        !title && title.trim() === "" &&
        !description && description.trim() === "" &&
        !releaseDate && releaseDate.trim() === "" &&
        !posterUrl && posterUrl.trim() === "" &&
        !featured && featured.trim() === ""
    ){
        return res.status(422).json({message:"Invalid inputs"});
    }

    let movie;
    try{
        movie = new Movie({
            title,
            description,
            releaseDate : new Date(`${releaseDate}`),
            posterUrl,
            featured,
            actors,
            admin:adminId
        });

        movie = await movie.save();
    }catch(err){
        return console.log(err);
    }

    if(!movie){
        return res.status(500).json({message:"Request failed"});
    }
    return res.status(200).json({movie})

;}

module.exports = {addMovie} 