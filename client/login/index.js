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
    }).then((response)=>{
        return response.text()
    }).then((data)=>{
        window.location.href = data;
    })
}