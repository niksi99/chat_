const express = require("express");
const Router = express.Router();

const AuthMiddleware = require("../middlewares/AuthMiddleware")
const MessageController = require("../controllers/MessageController")

Router.post("/send-message",
    AuthMiddleware.IsAuth,
    MessageController.SendMessage)

module.exports = Router;