//Load table models
const { date } = require('@hapi/joi');
const Logs = require('../models/logs')
const dlLogs = require('../models/downloadLogs')

//Load validation models
const {postConnectionValidation, postComponentsLogsValidation} = require('../validations/logsValidation')

const postConnectionLogsController = async (req, res) => { 
    //Check if data format is OK
    const { error } = postConnectionValidation(req.body);
    if (error) return res.status(200).send(error.details[0].message)

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var HH = today.getHours();
    var MM = today.getMinutes();
    var SS = today.getSeconds();
    if(dd<10) 
    {
        dd='0'+dd;
    }    

    if(mm<10) 
    {
        mm='0'+mm;
    } 

    if(HH<10) 
    {
        HH='0'+HH;
    } 

    if(MM<10) 
    {
        MM='0'+MM;
    } 

    if(SS<10) 
    {
        SS='0'+SS;
    } 
    today = dd+'/'+mm+'/'+yyyy+'-'+HH+':'+MM+':'+SS;

    //Create new connection log
    const log = new Logs({
        time: today,
        idUser: req.body.idUser,
        state: req.body.state
    });
    await log.save();

    //Send response 
    res.status(200).send(`Added to logs`)
};
const getSingleConnectionLogsController = async (req, res) => { 
    const connectionLogs = await Logs.find({ idUser: req.params.id}).exec();
    res.status(200).send(connectionLogs)
};
const getMultipleConnectionLogsController = async (req, res) => { 
    const connectionLogs = await Logs.find().exec();
    res.status(200).send(connectionLogs)
};
const deleteConnectionLogsController = async (req, res) => { 
    const connectionLogs = await Logs.deleteMany({ idUser: req.params.id}).exec();
    res.status(200).send("Supprimé")
};

const postComponentsLogsController = async (req, res) => { 
        //Check if data format is OK
        const { error } = postComponentsLogsValidation(req.body);
        if (error) return res.status(200).send(error.details[0].message)
    
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
            idUser: req.body.idUser,
            name: req.body.name,
            version: req.body.version,
            type: req.body.type
        });
        await log.save();
    
        //Send response 
        res.status(200).send(`Added to logs`)
};
const getSingleComponentsLogsController = async (req, res) => { 
    const connectionLogs = await dlLogs.find({ name: req.params.id}).exec();
    res.status(200).send(connectionLogs)
};
const getMultipleComponentsLogsController = async (req, res) => { 
    const connectionLogs = await dlLogs.find().exec();
    res.status(200).send(connectionLogs)
};
const deleteComponentsLogsController = async (req, res) => { 
    const connectionLogs = await dlLogs.deleteMany({ name: req.params.id}).exec();
    res.status(200).send("Supprimé")
};

module.exports.postConnectionLogsController = postConnectionLogsController;
module.exports.getSingleConnectionLogsController = getSingleConnectionLogsController;
module.exports.getMultipleConnectionLogsController = getMultipleConnectionLogsController;
module.exports.deleteConnectionLogsController = deleteConnectionLogsController;
module.exports.postComponentsLogsController = postComponentsLogsController;
module.exports.getSingleComponentsLogsController = getSingleComponentsLogsController;
module.exports.getMultipleComponentsLogsController = getMultipleComponentsLogsController;
module.exports.deleteComponentsLogsController = deleteComponentsLogsController;