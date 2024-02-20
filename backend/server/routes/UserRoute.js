const express = require("express")
const Router = express.Router();

const UserController = require("../controllers/UserController")
const AuthMiddleware = require("../middlewares/AuthMiddleware")

Router.get("/all-users",
    AuthMiddleware.IsAuth,
    UserController.GetAll)

module.exports = Router;