const WebSocket = require('ws')
const url = 'wss://hordes.io:5002'
const connection = new WebSocket(url)
 
connection.onopen = () => {
  connection.send('Message From Client') 
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}

(function wait () {
    if (connection.readyState !== "closed") setTimeout(wait, 1000);
 })();