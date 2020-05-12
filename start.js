// var express = require('express')
// var fs = require('fs')
// var https = require('https')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/fullchain.pem')
// }, app)
// .listen(443, function () {
//   console.log('Example app listening on port 443! Go to https://localhost:443/')
// })
var express = require('express');
var app = express();
var https = require("https")
var fs = require("fs")

app.get('/', function(reg, res){
    res.sendFile(__dirname + '/public/index.html');
});
app.use('/client', express.static(__dirname + '/public'));

https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/fullchain.pem')
}, app).listen(443);

console.log("Server started.");