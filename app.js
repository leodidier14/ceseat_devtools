const express = require('express')
const app = express()
// const dotenv = require('dotenv');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const mongoose = require('mongoose');
const { verifTokenAppController } = require('./controllers/tokenAppController')
const requestLog = require('./models/requestLog')
const route = '/api/devtools/'
//Connect to db
mongoose.connect(process.env.DB_MONGO_CONNECT, {useNewUrlParser: true, useUnifiedTopology:true}, () =>
    console.log("connected to database")
)

//######### Display name and version ############// 
const apiinf = require('./models/apiinfo')
var pjson = require('./package.json');
console.log("name : " + pjson.name);
console.log("version : " + pjson.version);
const apiinfos = apiinf.findOneAndUpdate({name: pjson.name, port: process.env.PORT,path:route}, {version : pjson.version}, {upsert: true}).exec()
//################################################//

//Import routes
const authRoute = require('./routes/routes')

app.use(async(req,res,next) => {
  const tokenapp = req.headers['tokenapp'];
  checkTokenApp = await verifTokenAppController(tokenapp) 
  if(checkTokenApp || req.originalUrl.includes('available'))
    next()
  else 
    res.status(400).send('not an authentified APP ')
})

app.use((req,res,next) => {
  requestLog.create({name:pjson.name,date: Date.now()}, (err)=> {
    if(err) console.log(err)
  })
  next()
})

//Route middlewares
app.use(route, authRoute)

//Running server and listening on port 3000
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))