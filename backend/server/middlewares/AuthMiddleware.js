const User = require("../models/User")
const jwt = require("jsonwebtoken")

module.exports.IsAuth = async(req, res, next) => {

    //console.log(req)
    const { token } = req.cookies;
    //console.log(token)

    if(!token) {
        return res.json({
            succes: false,
            message: "Token not available. User not logged in"
        })
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedToken)
        if(decodedToken) {
            const user = await User.findById(decodedToken.id)
            req.user = user;
            next();
            console.log(req)
        }
        else {
            return res.json({
                succes: false,
                message: "Invalid decodedToken"
            })
        }
    } catch (error) {
        return res.json({
            succes: false,
            message: error.message
        })
    }
}