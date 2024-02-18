const express = require("express");
const Router = express.Router();

const AuthMiddleware = require("../middlewares/AuthMiddleware")
const ChatController = require("../controllers/ChatController")

Router.post("/send/:id",
    AuthMiddleware.IsAuth,
    ChatController.SendMessage)

Router.get("/getConversation/:id",
    AuthMiddleware.IsAuth,
    ChatController.GetConversation)

module.exports = Router;