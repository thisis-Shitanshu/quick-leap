const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/User');
const { 
    registerValidation, 
    loginValidation,
    generateToken 
} = require('../services/validation');


router.post('/register', async (req, res) => {

    // Validate
    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { 
        name, 
        email, 
        password
    } = req.body;

    // Check if user already exists
    const emailExist = await User.findOne({ email });

    if (emailExist) {
        return res.status(400).send('Email already exists');
    }

    // Hash a Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = new User({
        name, 
        email, 
        password: hashPassword,
        admin: req.body.admin 
            ? req.body.admin 
            : false
    });

    try {
        const savedUser = await user.save();
        res.send({ user: user._id });

    } catch (error) {
        res.send(400).send(error);
    }
});

router.post('/login', async (req, res) => {
        // Validate
        const { error } = loginValidation(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }
    
        const {
            email, 
            password
        } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        // Password is correct
        const validPass = await bcrypt.compare(password, user.password);

        if (!validPass) {
            return res.status(400).send('Invalid credentials');
        }

        // Check of ADMIN
        if (!user.admin) {
            return res.status(400).send('Invalid credentials');
        }

        try {
            // Create and assign token
            const token = generateToken(user);

            res.status(200).json({
                message: 'Success',
                token
            });
        } catch (error) {
            res.status(400).send('Error!');
        }
});

//get current user from token
router.post('/me', function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token;

    if (!token) {
        return res.status(401).json({message: 'Must pass token'});
    }
    
    // Check token that was passed by decoding token using secret
    jwt.verify(token, process.env.TOKEN_SECRET, function(err, user) {
        if (err) throw err;
        //return user using the id from w/in JWTToken

        User.findById({
        '_id': user._id
        }, function(err, user) {
            if (err) throw err;
            
            res.json({
                message: 'Success',
                token
            });
        });
    })
});

module.exports = router;