const express = require('express')
const app = express()
// const dotenv = require('dotenv');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const mongoose = require('mongoose');

//Connect to db
mongoose.connect(process.env.DB_MONGO_CONNECT, {useNewUrlParser: true}, () =>
    console.log("connected to database")
);

//######### Display name and version ############// 
const apiinf = require('./models/apiinfo')
var pjson = require('./package.json');
console.log("name : " + pjson.name);
console.log("version : " + pjson.version);
const apiinfos = apiinf.findOneAndUpdate({name: pjson.name}, {version : pjson.version}, {upsert: true}).exec()
//################################################//

//Import routes
const authRoute = require('./routes/routes')

//Route middlewares
app.use('/api/devtools', authRoute)

//Running server and listening on port 3000
const PORT = 3006
app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))