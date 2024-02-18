const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    SenderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    ReceiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    Message: {
        type: String,
        require
    }
}, {timestamps: true})

module.exports = mongoose.model("Message", MessageSchema);