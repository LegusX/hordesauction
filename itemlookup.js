//Adds ids to a list that are requested from the Hordes api in bulk, instead of many single item requests
const fetch = require("node-fetch")
var mongo = require("mongodb").MongoClient;

var waitlist = {}
var pending = {}


exports.lookup = function (id) {
    return new Promise(function (res, reject) {
        waitlist[id] = res
    })
}

//Bulk retrive item data every 0.5 seconds (if any to retrieve)
setInterval(function () {
    let ids = []
    if (Object.getOwnPropertyNames(waitlist).length > 0) {
        Object.getOwnPropertyNames(waitlist).forEach(function (id, i) {
            //add id to list, then remove it so it doesn't get re-requested
            //random comment that is completely useless so that this will work
            ids.push(id)
            pending[id] = waitlist[id]
            delete waitlist[id]
        })
        console.log(ids)
        fetch("https://hordes.io/api/item/get", {
            method: "POST",
            body: JSON.stringify({
                ids: ids
            }),
            headers: {
                Cookie: "sid=s%3AQfmt_UdTR1cfmCCDhI-7KtqQ9EiWKC2R.CwX0vvj%2ByxrfkHJ0f5YHe2v5CRkL%2FFIhv4%2Fy1561PnU; party="
            }
        }).then((before) => before.json()).then((data) => {
            for (let i = 0; i < data.length; i++) {
                //send data to promise then delete it
                pending[data[i].id](data[i])
                ids.splice(ids.indexOf(data[i].id), 1)
                delete pending[data[i].id]
            }
            //any leftover ids don't exist apparently
            for (let i = 0; i < ids.length; i++) {
                pending[ids[i]](null)
                delete pending[ids[i]]
            }
        })
    }
}, 500)