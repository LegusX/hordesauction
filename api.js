var mongo = require("mongodb").MongoClient;
const {
    v4: uuidv4
} = require('uuid');
var sani = require("sanitize")()
const fs = require("fs")
const items = require("./itemlookup.js")


//google oauth crap
const {
    OAuth2Client
} = require('google-auth-library');
const CLIENT_ID = "409948744767-7cota7fak01vimkdrae2jvrj5jq43quj.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID);

//more dev mode check stuff
var url;
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
    data = req.body

    //make sure the data isn't going to murder the server somehow
    // Object.getOwnPropertyNames(data).forEach((e)=>{
    //     data[e] = sani.value(data[e], "string")
    // })

    switch (data.type) {
        case "googlelogin": {
            //check if user has an account, if so send them to home, if not send them to sign up
            verify(data.id).then((gid) => {
                db.collection("users").find({
                    gid: gid
                }).count((err, num) => {
                    if (num > 0) {
                        //probably need to do some more stuff here for logging in an existing user
                        db.collection("users").findOne({gid:gid}, function(err,result){
                            //update sid
                            if(result.expires == null || result.expires < Date.now()) {
                                let sid = uuidv4() + "-" + uuidv4()
                                let expiration = Date.now() + 24 * 3600000 * 14
                                
                                result.sid = sid
                                result.expires = expiration
                                res.cookie("sid", sid,{
                                    expires: new Date(expiration)
                                })
                                res.cookie("name", result.username,{
                                    expires: new Date(expiration)
                                })
                                res.cookie("ver", "true")
                                res.send("https://hordes.auction")
                            }
                            else {
                                res.cookie("sid", result.sid,{
                                    expires: new Date(result.expires)
                                })
                                res.cookie("name", result.username,{
                                    expires: new Date(result.expires)
                                })
                                res.cookie("ver", "true")
                                res.send("https://hordes.auction")
                            }
                        })
                    } else res.send("https://hordes.auction/signup?=" + gid) //send user to signup
                })
            }).catch(console.error);
            break;
        }
        case "signup": {
            db.collection("users").find({
                gid: data.id
            }).count((err, num) => {
                if (num > 0) {
                    res.send(JSON.stringify({
                        status: "error",
                        info: "You already have a account associated with your Google account!"
                    }))
                } else {
                    db.collection("users").find({
                        username: data.username
                    }).count((err, num) => {
                        if (num > 0 && !res.headersSent) {
                            res.send(JSON.stringify({
                                status: "error",
                                info: "That username has already been taken."
                            }))
                        }
                        //if nothing has been sent as a response, complete signup
                        else if (!res.headersSent) {
                            let uid = uuidv4()
                            let sid = uuidv4() + "-" + uuidv4()
                            let expiration = Date.now() + 24 * 3600000 * 14

                            //add user to db
                            db.collection("users").insertOne({
                                gid: data.id,
                                username: data.username,
                                uid: uid,
                                sid: sid,
                                expires: expiration
                            })

                            //set sid cookie so they can sign in when loading the page
                            //expires after 2 weeks
                            res.cookie("sid", sid, {
                                expires: new Date(expiration)
                            })
                            //name cookie to go in top right hand corner of screen
                            res.cookie("name", data.username, {
                                expires: new Date(expiration)
                            })
                            res.send(JSON.stringify({
                                status: "ok"
                            }))
                        }
                    })
                }
            })
            break;
        }
        case "cookielogin": {
            db.collection("users").findOne({
                sid: req.cookies.sid
            }, function (err, found) {
                if (found !== null) {
                    if (found.expires < Date.now()) {
                        //SID has expired
                        //remove all cookies and tell them no
                        res.cookie("sid", "")
                        res.cookie("ver", "false")
                        res.cookie("name", "")
                        res.status(403)
                        res.end()

                        //update db so that they can sign in again
                        found.expires = null
                        found.sid = null
                    } else {
                        res.cookie("ver", "true")
                        res.cookie("name", found.username)
                        res.status(200)
                        res.end()
                    }
                }
          
            })
            break;
        }
    }
}
exports.get = function (req, res) {
    res.send("this does absolutely nothing yet, go away")
}

exports.signout = function(req, res) {
    res.clearCookie("name")
    res.clearCookie("sid")
    res.clearCookie("ver")
    res.status(200)
    res.redirect("https://hordes.auction/")
}

//process req/res before sending it off to itemlookup.js
exports.lookup = async function(req,res) {
    console.log(req.body +"body")
    let item = await items.lookup(req.body)
    console.log("sending data")
    res.json(item)
}