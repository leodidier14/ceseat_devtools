
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Components = new Schema({
    name : String,
    type: String,
    version : String,
    description : String,
    git : String,
    doc: String
});

module.exports = mongoose.model('Components', Components)