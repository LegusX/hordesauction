window.onload = function(){
    if(getCookie("sid") !== undefined && getCookie("ver") !== "true") {
        fetch("/api", {
            method:"POST",
            body: JSON.stringify({
                type:"cookielogin"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((r)=>{
            if (r.ok) {
                updatePage()
            }
        })
    }
    else if (getCookie("ver") === "true") {
        updatePage()
    }
}

//https://stackoverflow.com/a/15724300
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift()
  }

function updatePage() {
    document.getElementById("loginbutton").style.display = "none"
    document.getElementById("userDropdown").style.display = ""
    document.getElementById("navbarDropdown").innerText = getCookie("name")
}