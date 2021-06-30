//Validation
const Joi = require('@hapi/joi')

//Register validation
const postConnectionValidation = (data) => {
    const schema = Joi.object({ 
        id: Joi.string()  .min(1),
        idUser: Joi.string()  .min(1) .required(),
        state : Joi.string()  .min(1) .required()
    });       
    return schema.validate(data)
}

//Register validation
const postComponentsLogsValidation = (data) => {
    const schema = Joi.object({ 
        idUser: Joi.string()  .min(1) .required(),
        name : Joi.string()  .min(1) .required(),
        type : Joi.string()  .min(1) .required(),
        version : Joi.string()  .min(1) .required()
    });       
    return schema.validate(data)
}

//create component
const postComponentsValidation = (data) => {
    const schema = Joi.object({ 
        _id : Joi.number().optional().allow('').allow(null),
        name : Joi.string()  .min(1) .required(),
        type: Joi.string()  .min(1) .required(),
        version : Joi.string()  .min(1) .required(),
        description : Joi.string()  .min(1),
        downloadLink : Joi.string()  .min(1),
        documentationLink: Joi.string()  .min(1)
    });       
    return schema.validate(data)
}

module.exports.postConnectionValidation = postConnectionValidation;
module.exports.postComponentsLogsValidation = postComponentsLogsValidation;
module.exports.postComponentsValidation = postComponentsValidation;

