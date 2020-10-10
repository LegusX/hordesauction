//Adds ids to a list that are requested from the Hordes api in bulk, instead of many single item requests
const fetch = require("node-fetch")
var mongo = require("mongodb").MongoClient;
const Item = require("./hydrate/hydrate.js").hydrate
const fs = require("fs")

var waitlist = {}
var pending = {}
var ids = []

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

})

exports.lookup = function(id) {
    return new Promise(function(res, reject) {
        waitlist[id] = res
    })
}

function updateItem(item) {
    db.collection("items").findOneAndReplace({ id: String(item.id) }, {
        id: String(item.id),
        expires: (Date.now() + (30 * 60 * 1000)),
        data: item
    }, { upsert: true })
}

//Bulk retrive item data every 0.5 seconds (if any to retrieve)
setInterval(function() {
    Object.getOwnPropertyNames(waitlist).forEach(function(id, i) {
        db.collection("items").findOne({ id:String(id) }, (err, result) => {
            if (result === null) {
                ids.push(id)
                pending[id] = waitlist[id]
                delete waitlist[id]
            }
            else if (result.expires < Date.now()) {
                ids.push(id)
                pending[id] = waitlist[id]
                delete waitlist[id]
            }
            else {
                //if it was found and is valid, then send it instead of looking it up again
                waitlist[id](result.data)
                ids.splice(ids.indexOf(result.data.id), 1)
                delete waitlist[id]
            }
        })
        //add id to list, then remove it so it doesn't get re-requested
        //random comment that is completely useless so that this will work

    })
    if (ids.length > 0) {
        fetch("https://hordes.io/api/item/get", {
            method: "POST",
            body: JSON.stringify({
                ids: ids
            }),
            headers: {
                Cookie: "sid=s%3A-7r4BrMceMQGtvpg0aDDmLThDZREGm07.4moLMxXZhxASQ8tzaeDSuUQ8re%2FupH4QUhATmALBbCQ; party="
            }
        }).then((before) => before.json()).then((data) => {
            for (let i = 0; i < data.length; i++) {
                //send data to promise then delete it
                let item = new Item()
                item.hydrate(data[i])
                //if the item couldn't be hydrated, then just claim it doesn't exist ig
                if (item.id === null) item = null
                if (item.id !== null) updateItem(item)
                pending[data[i].id](item)
                ids.splice(ids.indexOf(data[i].id), 1)
                delete pending[data[i].id]
            }
            //any leftover ids don't exist apparently
            for (let i = 0; i < ids.length; i++) {
                console.log("didn't exist")
                pending[ids[i]](null)
                delete pending[ids[i]]
            }
        })
    }
}, 500)
