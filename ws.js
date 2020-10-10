const fetch = require("node-fetch")
var mongo = require("mongodb").MongoClient;
const Item = require("./hydrate/hydrate.js").hydrate
const fs = require("fs")

var url;
if (fs.existsSync("/etc/letsencrypt/live/hordes.auction/privkey.pem")) url = "mongodb://localhost:27017/";
else url = "mongodb+srv://legusx:t3tckgmagrMOfdeo@auctiondev.bbrbb.mongodb.net/data?retryWrites=true&w=majority"

//connect to db
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err, dbase) {
    if (err) throw err;
    db = dbase.db("data")

    db.collection("items").findOne({id:"asdf"}, (err,result)=>{
        console.log(result)
    })
})

