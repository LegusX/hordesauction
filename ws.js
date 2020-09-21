const WebSocket = require("ws")
var client = new WebSocket("ws://hordes.io:5002", {
    headers:{
        Cookie: "sid=s%3AxUr8WHIpKMW9v6vCqNBHsJbKa4xk7DPN.kWDI7azSqRP0wCKf2sTX5q41G5W%2B2UunSNiHOg1sU6g; party=",
        // "Sec-WebSocket-Key": "XTyb34hjKbbXtOpsHNSGKg==",
        // "Sec-WebSocket-Extensions": "permessage-deflate"
    }
})

client.onopen = () => {
    connection.send('Message From Client') 
  }
   
// client.addEventListener("open", function(){
//     console.log("WS has been opened!")
// })

// client.addEventListener("message", function(msg){
//     console.log(msg)
//     return false;
// })

(function wait () {
    if (client.readyState !== "closed") setTimeout(wait, 1000);
 })();