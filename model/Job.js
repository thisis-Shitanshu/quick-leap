const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    company: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    location: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    aboutCompany: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Job', jobSchema);