const express = require('express');
const Router = express.Router();

const AuthController = require("../controllers/AuthController")

Router.post("/register", AuthController.Register )
Router.post("/login", AuthController.Login)
Router.post("/logout", AuthController.Logout);
Router.get("/is_logged_in", AuthController.IsLoggedIn)

module.exports = Router;