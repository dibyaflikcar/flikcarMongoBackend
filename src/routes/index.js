const express = require('express');
const app = express();
const global = require('./api/global.router');
// const testDrive = require('./api/testDrive.router');


// app.use('/test-drive', testDrive);
app.use('/', global);
module.exports = app;