const fs = require("fs")
var mongo = require("mongodb").MongoClient;

//more dev mode check stuff
var url;
if (fs.existsSync("/etc/letsencrypt/live/hordes.auction/privkey.pem")) url = "mongodb://localhost:27017/", devmode = false;
else url = "mongodb+srv://legusx:t3tckgmagrMOfdeo@auctiondev.bbrbb.mongodb.net/data?retryWrites=true&w=majority", devmode = true;

//connect to db
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err, dbase) {
    if (err) throw err;
    db = dbase.db("data")

})

exports.page = (req,res) =>{
    let id = req.originalUrl.split("/")[2]
    db.collection("auctions").findOne({id:id}, (err,found)=>{
        res.json(found)
    })
}