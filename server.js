var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');
var app = express();

//console.log("port : " + process.env.port),

mongoose.connect(config.dbConnectionString, function(err){
    if(err){
        console.log('Failed connecting to Database');
    } else{
        console.log('Successfully conneccted to Database!');
    }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', function(req, res){
    res.sendFile(config.sendFile);
});

app.get('/images', function(req, res){
    res.sendFile(config.imageFile);
});


app.listen(config.port, function(err){
    if(err) {
        console.log(err);
        } else {
            console.log("listening on Port " + config.port);
        }


    
});