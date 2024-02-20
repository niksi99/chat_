const User = require("../models/User")

module.exports.GetAll = async (req, res, next) => {
    
    const loggedInUserID = req.user._id;
    if(!loggedInUserID) {
        return res.json({
            success: false,
            message: "Not found logged in use r ID"
        })
    }

    try {
        const allUsersExceptMyself = await User.find({ _id: { $ne: loggedInUserID }});
        return res.json({
            success: true,
            allUsersExceptMyself
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}