//Load table models
const { date } = require('@hapi/joi');
const Logs = require('../models/logs')
const dlLogs = require('../models/downloadLogs')

//Load validation models
const { postComponentsLogsValidation} = require('../validations/logsValidation')

const getMultipleConnectionLogsController = async (req, res) => { 
    console.log('getMultipleConnectionLogsController')

    const connectionLogs = await Logs.find().exec();
    console.log(connectionLogs)
    res.status(200).send(connectionLogs)
};


const postComponentsLogsController = async (req, res) => { 
        //Check if data format is OK
        console.log(req.body)
        /*const { error } = postComponentsLogsValidation(req.body);
        console.log(error)
        if (error) return res.status(200).send(error.details[0].message)*/
    
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        var HH = today.getHours();
        var MM = today.getMinutes();
        var SS = today.getSeconds();
        if(dd<10) {dd='0'+dd;}    
        if(mm<10) {mm='0'+mm;} 
        if(HH<10) {HH='0'+HH;} 
        if(MM<10) {MM='0'+MM;} 
        if(SS<10) {SS='0'+SS;} 
        tDate = dd+'/'+mm+'/'+yyyy;
        tHeure = HH+':'+MM+':'+SS;
    
        //Create new connection log
        const log = new dlLogs({
            date: tDate,
            heure: tHeure,
            idUser: req.body.userId,
            name: req.body.name,
            version: req.body.version,
            type: req.body.type
        });
        await log.save();
    
        //Send response 
        res.status(200).send(`Added to logs`)
};
const getMultipleComponentsLogsController = async (req, res) => { 
    const connectionLogs = await dlLogs.find().exec();
    res.status(200).send(connectionLogs)
};

// module.exports.postConnectionLogsController = postConnectionLogsController;
module.exports.getMultipleConnectionLogsController = getMultipleConnectionLogsController;
module.exports.postComponentsLogsController = postComponentsLogsController;
module.exports.getMultipleComponentsLogsController = getMultipleComponentsLogsController;