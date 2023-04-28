require('dotenv').config();
const {MONGODB, PORT} = process.env;
exports.MONGODB = MONGODB;
exports.PORT = PORT;