const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

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

UserSchema.pre("save", async function(next) {
    if(!this.isModified('Password'))
        next();

    this.Password = await bcrypt.hash(this.Password, 10)
})

UserSchema.methods.ComparePasswords_HashedNotHashed = async function(lozinka) {
    if(lozinka === "")
        return "Prazno polje lozinke"

    return await bcrypt.compare(lozinka, this.Password)
}

UserSchema.methods.GenerateJWT = function(res) {
    const token = jwt.sign(
        {id: this._id, email: this.Email},
        process.env.JWT_SECRET,
        { expiresIn: 900 }
    )

    res.cookie("token", token, {
        maxAge: 900 * 1000,
        httpOnly: true
    })

    return token;
}

module.exports = mongoose.model("User", UserSchema)