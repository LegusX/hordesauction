window.onload = function() {
    document.getElementById("checkid").addEventListener("click", function(){
        if (document.getElementById("itemid").textContent.length == 9) {
            fetch("/api/lookup", {
                method: "POST",
                body: document.getElementById("itemid").textContent,
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then((r)=>{r.json()}).then((data)=>{
                console.log(data)
                if (data === null) alert("Item ID does not exist!")
            })
        }
    })
}

//need to add code that sends an ID to itemlookup to see if it exists and can be sold
//and then I need to make sure that itemlookup actually works