var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var db;

//google oauth crap
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "409948744767-7cota7fak01vimkdrae2jvrj5jq43quj.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID);


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
mongo.connect(url, function (err, dbase) {
    if (err) throw err;
    db = dbase.db("data")

})

//code for use outside module
exports.post = function (req, res) {
    console.log(req.body)
    data = JSON.parse(req.body)
    switch (data.type) {
        case "login": {
            //check if user has an account, if so send them to sign up page, if not send them back to home
            let id = verify(data.id).catch(console.error);
            if (db.collection("users").count({id:id}) !== 1) {
                //sign up user
                res.redirect("www.google.com")
            }
            else {
                //login user
                res.redirect("www.yahoo.com")
            }
            break;
        }
    }
}
exports.get = function (req, res) {
    res.send("hiya")
}