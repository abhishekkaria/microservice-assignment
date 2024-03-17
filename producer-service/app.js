const express = require('express');
const bodyParser = require('body-parser');
const { uploadCsv } = require('./controller');
const multer = require('multer');

const app = express();
const upload = multer();

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to accept CSV file
app.post('/upload-csv', upload.single('csvData') , uploadCsv);

module.exports = app;
