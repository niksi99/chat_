const User = require('../models/User')

module.exports.Register = async(req, res, next) => {

    const { FullName, Username, Email, Password, ConfirmedPassword, Gender } = req.body;
    try {

        if(Password !== ConfirmedPassword) {
            res.json({
                succes: false,
                message: "Passwords are not same"
            })
        }

        const checkUser = await User.findOne({Email});
        if(checkUser) {
            res.json({
                succes: false,
                message: "User with this email already exists."
            })
        }

        const boyProfileImg = `https://avatar.iran.liara.run/public/boy?username=${Username}`;
        const girlProfileImg = `https://avatar.iran.liara.run/public/girl?username=${Username}`;
        const newUser = await User.create({
            FullName,
            Username,
            Email,
            Password,
            Gender,
            ProfileImg: Gender === "male" ? boyProfileImg : girlProfileImg
        });
        res.json({
            succes: true,
            newUser
        })
    } catch (error) {
        res.json({
            succes: false,
            message: error.message
        })
    }
}

module.exports.Login = async(req, res, next) => {

    const { Email, Password } = req.body;
    try {

        if(Password === "") {
            res.json({
                succes: false,
                message: "Passwor cant be empty"
            })
        }
        if(Email === "") {
            res.json({
                succes: false,
                message: "Email cant be empty"
            })
        }

        const checkUser = await User.findOne({Email});
        if(!checkUser) {
            res.json({
                succes: false,
                message: "User with this email DOES NOT exist."
            })
        }
        
        const passwordCheck = await checkUser.ComparePasswords_HashedNotHashed(Password);
        if(!passwordCheck) {
            res.json({
                succes: false,
                message: "Lozinke se ne sazu"
            })
        }
        const token = checkUser.GenerateJWT(res);
        
        res.json({
            succes: true,
            token
        })
    } catch (error) {
        res.json({
            succes: false,
            message: error.message
        })
    }
}

module.exports.Logout = async(req, res, next) => {
    try {
        res.cookie("token", "", { maxAge: 0 })
        res.json({
            succes: true,
            message: "User loged out successfully "
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}