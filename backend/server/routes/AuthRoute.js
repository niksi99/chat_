const express = require('express');
const Router = express.Router();

const AuthController = require("../controllers/AuthController")

Router.post("/register", AuthController.Register )

module.exports = Router;