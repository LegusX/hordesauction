function onSignIn(user) {
    var id_token = user.getAuthResponse().id_token;
    fetch("/api",{
        method: "POST",
        body: JSON.stringify({
            type:"login",
            id:id_token
        }),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then((response)=>console.log(response))
}