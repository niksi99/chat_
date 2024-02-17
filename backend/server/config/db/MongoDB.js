const mongoose = require('mongoose');

const url = process.env.MONGODB_URL;

const MongoDB_Connection = async () => {
    mongoose.connect(url, {})
            .then(() => {console.log("Radi Mongo")})
            .catch((error) => {console.log(error)})
}

module.exports = MongoDB_Connection; 