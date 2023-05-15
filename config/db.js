require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    //Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true});
    const connection = mongoose.connection;

    connection.once('open', function() {
        console.log('Database connected.');
    })
    .on('error', function(err) {
        console.log('Connection failed.');
    });
}

module.exports = connectDB;