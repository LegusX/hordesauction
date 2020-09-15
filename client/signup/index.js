window.onload = function(){
    //submit username
    document.getElementById("signup").addEventListener("click", function(){
        fetch("/api",{
            method: "POST",
            body: JSON.stringify({
                type: "signup",
                id: window.location.href.split("=")[1],
                username: document.getElementById("displayname").value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            switch (data.status) {
                case "ok": {
                    //server thinks everything is fine, send user back to home page
                    window.location.href = "https://hordes.auction#"
                }
                case "error": {
                    alert(data.info)
                }
            }
        });
    })
}