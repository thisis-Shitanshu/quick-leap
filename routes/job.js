const router = require('express').Router();

const verify = require('../services/verifyToken');
const Job = require('../model/Job');

router.get('/all', verify, (req, res) => {
    res.json(req.user);
});

module.exports = router;