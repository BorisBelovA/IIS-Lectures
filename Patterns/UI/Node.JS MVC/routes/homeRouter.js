const express = require("express");
const homeRouter = express.Router();  // для адресов с "/"
const homeController = require("../controllers/homeControllers");

homeRouter.use('/about', homeController.about);
homeRouter.use('/', homeController.index);

module.exports = homeRouter;