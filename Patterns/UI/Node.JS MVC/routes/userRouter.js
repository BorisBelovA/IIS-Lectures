const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userControllesrs");

userRouter.use('/postUser', userController.postUder);
userRouter.use('/create', userController.addUser);
userRouter.use('/get/:id', userController.getUser);
userRouter.use('/edit/saveUser', userController.saveUser)
userRouter.use('/edit/:id', userController.getUser);
userRouter.use('/delete/:id', userController.deleteUser);
userRouter.use('/', userController.getUsers);

module.exports = userRouter;