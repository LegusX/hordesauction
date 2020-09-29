window.onload = function() {
    document.getElementById("checkid").addEventListener("click", function(){
        if (document.getElementById("itemid").value.length === 9) {
            fetch("/api/lookup", {
                method: "POST",
                body: document.getElementById("itemid").value,
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then((r)=>{r.json()}).then((data)=>{
                console.log(data)
                if (data === null) alert("Item ID does not exist!")
            })
        }
        else alert("That item ID is not the valid length! (9 numbers long)")
    })
}

//need to add code that sends an ID to itemlookup to see if it exists and can be sold
//and then I need to make sure that itemlookup actually works