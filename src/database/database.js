const mongoose = require('mongoose');
const {MONGODB} = require('../env');
const {databaseRunning} = require('../function/function')
const connect = async () => {
    try {
        databaseRunning();
        await mongoose.connect(MONGODB)
    } catch (error) {
        console.error(error.message)
    }
};

exports.connect = connect;