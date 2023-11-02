const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const ejs = require("ejs"); 
const mongoose = require("mongoose");
require('dotenv').config();
const apiRouter = require('./src/routes/index');

const app= express();


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/api/', apiRouter);

mongoose.connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: 'flikcar'
},).then((res) => {
    console.log("Database connected");
  }).catch(error => {
     console.log(error);
   });

app.set("view engine", "ejs"); 

app.get("/", function(req, res){ 
    console.log("Welcome to Flikcar Backend"); 
}); 
  

app.listen(8000,()=>{
    console.log("on port 8000!");
})