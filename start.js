var express = require('express');
var app = express();
var https = require("https")
var http = require('http');
var fs = require("fs")
var api = require("./api.js")
var bodyParser = require("body-parser")
var cookieParser = require('cookie-parser')

var devmode = false;

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', express.static(__dirname + '/client'));

//send requests to the api module to be handled
app.post('/api', (req, res) => api.post(req, res))
app.get("/api", (req, res) => api.get(req, res))
app.get("/signout", (req, res) => api.signout(req, res))
app.post("/api/lookup", bodyParser.text({type: '*/*'}), (req, res) => api.lookup(req, res))

// production env
// checks to see if the certificate exists, if not move to dev env
if (fs.existsSync("/etc/letsencrypt/live/hordes.auction/privkey.pem")) {
    //force redirect to https
    http.createServer(function (req, res) {
        res.writeHead(308, {
            "Location": "https://" + req.headers['host'] + req.url
        });
        res.end();
    }).listen(80);

    https.createServer({
        key: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/fullchain.pem')
    }, app).listen(443);
    console.log("HTTP/S Servers started in production mode");
}

// debug env
else {
    http.createServer(app).listen(80)
    console.log("HTTP server started in dev mode")
    devmode = true
}