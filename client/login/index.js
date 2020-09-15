function onSignIn(user) {
    var id_token = user.getAuthResponse().id_token;
    fetch("/api", {
        method: "POST",
        body: JSON.stringify({
            type: "login",
            id: id_token
        }),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        console.log(data); // this will be a string
    });
}