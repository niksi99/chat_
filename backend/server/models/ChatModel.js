const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    Participints: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    Messages: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
        }
    ]
})

module.exports = mongoose.model("Chat", ChatSchema)