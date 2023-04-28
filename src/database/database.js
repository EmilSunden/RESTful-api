const mongoose = require('mongoose');
const {MONGODB} = require('../env');
const connect = async () => {
    try {
        console.log('Connected To DB')
        await mongoose.connect(MONGODB)
    } catch (error) {
        console.error(error.message)
    }
};

exports.connect = connect;