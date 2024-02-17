const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    Username: {
        required: true,
        unique: true,
        type: String
    },
    Password: {
        type: String,
		required: true,
		minlength: 6,
    },
    Gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    ProfileImg: {
        type: String,
        default: ""
    }
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)