
/*const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))*/

var express = require('express');
var app     = express();
var fs      = require("fs");

 app.get('/listUser', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
}) 

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("GET method example app listening at http://%s:%s", host, port)

})
