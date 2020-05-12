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
var http = express.createServer()
var fs = require("fs")

app.get('/', function (reg, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

http.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url);

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})
http.listen(80)

https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/fullchain.pem')
}, app).listen(443);

console.log("Server started.");
//all how about now