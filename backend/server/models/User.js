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
    Email: {
        type: String,
		required: true,
        unique: true,
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