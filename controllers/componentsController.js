//Load table models
const { date } = require('@hapi/joi');
const Components = require('../models/components')
const mongoose = require('mongoose')
//Load validation models
const {postComponentsValidation} = require('../validations/logsValidation')


const postComponentsController = async (req, res) => { 
        const { error } = postComponentsValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message)

        try {
            const comp = new Components({
                name: req.body.name,
                type: req.body.type,
                version: req.body.version,
                description : req.body.description,
                git : req.body.downloadLink,
                doc: req.body.documentationLink
            });

            await comp.save();  
        } catch (error) {
            res.status(400).send(error)
        }

        //Send response 
        res.status(200).send(`Created`)
};

const getComponentsController = async (req, res) => { 
    try {
        const getComp = await Components.find().exec();
        res.status(200).send(getComp)
    } catch (error) {
        res.status(400).send(error)
    }
};
const putComponentsController = async (req, res) => { 
    //Check if data format is OK
    const { error } = postComponentsValidation(req.body);
    if (error) return res.status(200).send(error.details[0].message)
    try {
        const putComp = await Components.findOneAndUpdate({name: req.body.name}, {name: req.body.name, version : req.body.version, type: req.body.type, description: req.body.description, git: req.body.git, doc: req.body.doc}, {upsert: true}).exec()
    } catch (error) {
        res.status(400).send(error)
    }
    
    res.status(200).send("Update")
};
const deleteComponentsController = async (req, res) => { 
    try {
    const deleteComp = await Components.deleteMany({ _id: mongoose.Types.ObjectId(req.params.id)})
    .exec()
    } catch(err) {
        res.status(400).send(error)
    }
    res.status(200).send("Supprimé")
};

module.exports.postComponentsController = postComponentsController;
module.exports.getComponentsController = getComponentsController;
module.exports.putComponentsController = putComponentsController;
module.exports.deleteComponentsController = deleteComponentsController;