const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.body.token;

    if (!token) return res.status(401).json({
        success: false,
        message: 'Please register Log in using a valid email.'
    });

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);

        req.user = verified;

        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
}