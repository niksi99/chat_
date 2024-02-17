const User = require('../models/User')

module.exports.Register = async(req, res, next) => {

    const newUser = await User.create(req.body);
    res.json({
        succes: true,
        newUser
    })
}