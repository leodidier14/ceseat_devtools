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
const postComponentsValidation = (data) => {
    const schema = Joi.object({ 
        idUser: Joi.string()  .min(1) .required(),
        name : Joi.string()  .min(1) .required(),
        type : Joi.string()  .min(1) .required(),
        version : Joi.string()  .min(1) .required()
    });       
    return schema.validate(data)
}

module.exports.postConnectionValidation = postConnectionValidation;
module.exports.postComponentsValidation = postComponentsValidation;
