const express = require('express');
const { getAllUser } = require('../models/user-controller');

const userRouter = express.Router();

userRouter.get("/", getAllUser);

export default userRouter;