// Setting up Environment Variable
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Importing external libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Setting up Express
const app = express();

// Setting up PORT
const port = process.env.PORT || 5000;

// Adding middleware to express
app.use(bodyParser.json());


require('./routes/authRoutes')(app);

// For Production: Delivering built client for all incoming requests
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

// Starting Server
app.listen(port, error => {
    if (error) {
        throw error;
    }
    console.log('Server running on port 🚀: ' + port); 
});
