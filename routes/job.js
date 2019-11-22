const router = require('express').Router();

const verify = require('../services/verifyToken');
const Job = require('../model/Job');
const { jobValidation } = require('../services/validation');

router.post('/create', verify, async (req, res) => {
    if (!req.user.admin) 
    return res.status(400).send('Admin Wanted $1000!');

    // Validate
    const { error } = jobValidation(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { 
        title,
        company,
        location,
        aboutCompany,
        role
    } = req.body;

    // Create Job
    const job = new Job({
        title,
        company,
        location,
        aboutCompany,
        role
    });

    try {
        const savedJob = await job.save();
        res.send({ job: job._id });

    } catch (error) {
        res.send(400).send(error);
    }
});

// Read
router.get('/all', async (req, res) => {
    
    const jobs = await Job.find({});

    res.json(jobs);
});

// Delete
router.post('/delete', verify, async (req, res) => {
    if (!req.user.admin) 
    return res.status(400).send('Admin Wanted $1000!');

    const { 
        id
    } = req.body;

    

    try {
        await Job.findOneAndDelete({ _id: id })
        res.status(200).send('Success');

    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;