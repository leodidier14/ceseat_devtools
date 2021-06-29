//Load table models
const { date } = require('@hapi/joi');
const Components = require('../models/components')

//Load validation models
const {postComponentsValidation} = require('../validations/logsValidation')


const postComponentsController = async (req, res) => { 
        //Check if data format is OK
        const { error } = postComponentsValidation(req.body);
        if (error) return res.status(200).send(error.details[0].message)
    
    
        //Create new connection log
        const comp = new Components({
            name: req.body.name,
            type: req.body.type,
            version: req.body.version,
            description : req.body.description,
            git : req.body.git,
            doc: req.body.doc
            
        });
        await comp.save();
    
        //Send response 
        res.status(200).send(`Created`)
};
const getComponentsController = async (req, res) => { 
    const getComp = await Components.find({ name: req.params.id}).exec();
    res.status(200).send(getComp)
};
const putComponentsController = async (req, res) => { 
    //Check if data format is OK
    const { error } = postComponentsValidation(req.body);
    if (error) return res.status(200).send(error.details[0].message)
    const putComp = await Components.findOneAndUpdate({name: req.body.name}, {name: req.body.name, version : req.body.version, type: req.body.type, description: req.body.description, git: req.body.git, doc: req.body.doc}, {upsert: true}).exec()
    res.status(200).send("Update")
};
const deleteComponentsController = async (req, res) => { 
    const deleteComp = await Components.deleteMany({ name: req.params.id}).exec();
    res.status(200).send("Supprimé")
};

module.exports.postComponentsController = postComponentsController;
module.exports.getComponentsController = getComponentsController;
module.exports.putComponentsController = putComponentsController;
module.exports.deleteComponentsController = deleteComponentsController;