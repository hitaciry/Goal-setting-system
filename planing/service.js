//server.js
'use strict service'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;
app.use(express.static(__dirname + '/build'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port)
 console.log("server started on port " + port)
//root
//ztpWmH5&Eye%=9^#
//mongoose.connect('mongodb://root:ztpWmH5&Eye%=9^#@cluster0-shard-00-00-a9myt.mongodb.net:27017,cluster0-shard-00-01-a9myt.mongodb.net:27017,cluster0-shard-00-02-a9myt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

