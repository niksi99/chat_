const express = require('express');
const Router = express.Router();

const AuthController = require("../controllers/AuthController")

Router.post("/register", AuthController.Register )
Router.post("/login", AuthController.Login)

module.exports = Router;