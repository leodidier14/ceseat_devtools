//Load table models
const { date } = require('@hapi/joi');
const Logs = require('../models/logs')
const dlLogs = require('../models/downloadLogs')

const getMultipleConnectionLogsController = async (req, res) => { 
    try {
        const connectionLogs = await Logs.find().exec(); 
        res.status(200).send(connectionLogs)
    } catch (error) {
        res.status(400).send(error)
    }
};


const postComponentsLogsController = async (req, res) => {   
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
    
        try {
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
        } catch (error) {
            res.status(400).send(error)
        }

        //Send response 
        res.status(200).send(`Added to logs`)
};
const getMultipleComponentsLogsController = async (req, res) => { 
    try {
        const connectionLogs = await dlLogs.find().exec();
        res.status(200).send(connectionLogs)
    } catch (error) {
        res.status(400).send(error)
    }
};

module.exports.getMultipleConnectionLogsController = getMultipleConnectionLogsController;
module.exports.postComponentsLogsController = postComponentsLogsController;
module.exports.getMultipleComponentsLogsController = getMultipleComponentsLogsController;