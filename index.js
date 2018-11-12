'use strict';
var express = require('express');
var HttpStatus = require('http-status-codes');

var app = express();

var gameRoute = require('./src/routes/game');

var path = require('path');

var bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
})

app.use(gameRoute);
app.use(express.static('./public'));

// Handler for 404 - Resource not found
app.use((req, res, next) => {
  res.status(HttpStatus.NOT_FOUND).send('Resource not found');
  next();
})

// Handler for 500 - 
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/Error.html'))
})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info(`Server has started on ${PORT}`)
})