window.onload = function () {
    document.getElementById("checkid").addEventListener("click", function () {
        if (document.getElementById("itemid").value.length === 9 || document.getElementById("itemid").value.length === 8) {
            fetch("/api/lookup", {
                method: "POST",
                body: document.getElementById("itemid").value,
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then((r) => {
                if (r.status !== 400 && r.status !== 401) {
                    r.json().then((data) => {
                        if (data === null) alert("Item does not exist!")
                        else {
                            //idk do something
                            console.log(data)
                            sellDisplay(data)
                        }
                    })
                }
                else if (r.status === 401) alert("Error: Cookie Denied (Tell LegusX)")
                else alert("That is an invalid ID (Probably has a non-int character)")
            })
        }
        else alert("Invalid ID (wrong length)")
    })

    //need to add code that sends an ID to itemlookup to see if it exists and can be sold
    //and then I need to make sure that itemlookup actually works
}