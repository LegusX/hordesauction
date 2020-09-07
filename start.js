var express = require('express');
var app = express();
var https = require("https")
var fs = require("fs")
var api = require ("./api.js")

app.use('/', express.static(__dirname + '/client'));
//send requests to the api module to be handled
app.post('/api', api.post(req,res))
app.get("/api", api.get(req,res))

//force redirect to https
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(308, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);

https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/fullchain.pem')
}, app).listen(443);

console.log("HTTP/S Servers started.");
