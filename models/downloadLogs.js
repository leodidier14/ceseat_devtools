
const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const dlLogsSchema = new Schema({
    idUser : Number,
    type : String,
    name : String,
    version : String,
    date : String,
    heure: String
});

module.exports = mongoose.model('dlLogs', dlLogsSchema)