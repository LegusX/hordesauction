var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/hordes.auction/fullchain.pem')
}, app)
.listen(443, function () {
  console.log('Example app listening on port 443! Go to https://localhost:443/')
})
