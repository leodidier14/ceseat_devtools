
const mongoose = require('mongoose');
const { Schema } = mongoose;

const logsSchema = new Schema({
    idUser : Number,
    time : String,
    state: String
});

module.exports = mongoose.model('Logs', logsSchema)
