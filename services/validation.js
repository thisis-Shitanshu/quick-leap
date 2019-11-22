var jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');

// Generate Token using secret from process.env.JWT_SECRET
const generateToken = (user) => {

    var u = {
        admin: user.admin,
        _id: user._id.toString()
    };

    return token = jwt.sign(u, process.env.TOKEN_SECRET, {
        expiresIn: 60 * 60 * 24 * 2// expires in 24 hours
    });
};

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
        admin: Joi.boolean()
    });

    // Lets Validate
    return schema.validate(data); 
};

// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });

    // Lets Validate
    return schema.validate(data); 
};

const jobValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        company: Joi.string().required(),
        location: Joi.string().required(),
        aboutCompany: Joi.string().required(),
        role: Joi.string().required(),
        token: Joi.string()
    });

    // Lets Validate
    return schema.validate(data); 
};

module.exports.registerValidation = registerValidation;

module.exports.loginValidation = loginValidation;

module.exports.generateToken = generateToken;

module.exports.jobValidation = jobValidation;