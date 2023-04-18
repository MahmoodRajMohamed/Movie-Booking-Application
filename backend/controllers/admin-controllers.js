const Admin = require("../models/Admin");
const bcrypt = require('bcryptjs');

const addAdmin = async (req, res, next)=>{
    const {email, password} = req.body;
    
    let existingAdmin;

    try {
        existingAdmin = await Admin.findOne({email})
    } catch (err){
        console.log(err);Admin
    } 

    if(existingAdmin){
        return res.status(400).json({message:"Admin already exists"})
    }
    
    let admin;
    const hashedPassword = bcrypt.hashSync(password);

    try {
        admin = new Admin({email, password : hashedPassword});
        admin = await admin.save();
    } catch (err){
        return console.log(err);
    }
    if(!admin){
        return res.status(500).json({message:"unexpected to store the admin"});
    }
    return res.status(201).json({ admin });
}

const getAdmin = async (req, res, next) => {
    let admin;

    try{
        admin = await Admin.find();
    }catch(err){
        console.log(err);
    }

    if(!admin){
        return res.status(500).json({message:"no admin found"});
    }
    return res.status(200).json({admin});
}

module.exports = {addAdmin, getAdmin}