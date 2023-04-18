const express = require('express');
const { addAdmin, getAdmin } = require('../controllers/admin-controllers');

const adminRouter = express.Router();

adminRouter.post('/signup',addAdmin);
adminRouter.get('/',getAdmin);

module.exports = adminRouter;