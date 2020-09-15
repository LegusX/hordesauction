var mongo = require("mongodb").MongoClient;
var url;
const fs = require("fs")

//google oauth crap
const {
    OAuth2Client
} = require('google-auth-library');
const CLIENT_ID = "409948744767-7cota7fak01vimkdrae2jvrj5jq43quj.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID);

//more dev mode check stuff
if (fs.existsSync("/etc/letsencrypt/live/hordes.auction/privkey.pem")) url = "mongodb://localhost:27017/";
else url = "mongodb+srv://legusx:t3tckgmagrMOfdeo@auctiondev.bbrbb.mongodb.net/data?retryWrites=true&w=majority"

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    return userid
}

//connect to db
mongo.connect(url, {
    useNewUrlParser: true
}, function (err, dbase) {
    if (err) throw err;
    db = dbase.db("data")

})

//exporting stuff because yeah
exports.post = function (req, res) {
    // console.log(req)
    data = req.body
    console.log(data)
    switch (data.type) {
        case "login": {
            //check if user has an account, if so send them to home, if not send them to sign up
            verify(data.id).then((id) => {
                console.log(id)
                if (db.collection("users").countDocuments({
                        id: id
                    }) !== 1) {
                    //sign up user
                    res.send("https://hordes.auction/signup?="+id)
                } else {
                    //login user
                    res.send("https://hordes.auction/")
                }
            }).catch(console.error);
            break;
        }
    }
}
exports.get = function (req, res) {
    res.send("hiya")
}