const { json } = require("express");

function onSignIn(user) {
    var id_token = user.getAuthResponse().id_token;
    fetch("/api",{
        method: "POST",
        body: JSON.stringify({
            type:"login",
            id:id_token
        })
    }).then((response)=>console.log(response))
}