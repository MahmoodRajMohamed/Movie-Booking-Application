const express = require('express');
const { addAdmin, adminLogin, getAdmin } = require('../controllers/admin-controllers');

const adminRouter = express.Router();

adminRouter.post('/signup',addAdmin);
adminRouter.post('/login',adminLogin);
adminRouter.get('/',getAdmin);

module.exports = adminRouter;