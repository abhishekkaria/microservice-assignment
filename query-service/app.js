const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { getEmployee } = require('./controller')

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to accept CSV file
app.get('/employees', getEmployee);

module.exports = app;
