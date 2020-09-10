//This script is run whenever I manage to mess up real good and have to redo the DB
var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/";

mongo.connect(url, function(err,dbase) {
    if (err) throw err;
    var db = dbase.db("data")
    db.createCollection("users")
    db.collection("users").insert({"type":"uselessfillerdata"})
    db.createCollection("auctions")
    db.collection("auctions").insert({"type":"uselessfillerdata"})
})