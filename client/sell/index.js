window.onload = function() {
    document.getElementById("checkid").addEventListener("click", function() {
        if (document.getElementById("itemid").value.length === 9 || document.getElementById("itemid").value.length === 8) {
            window.itemid = document.getElementById("itemid").value
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
                } else if (r.status === 401) alert("Error: Cookie Denied (Tell LegusX)")
                else alert("That is an invalid ID (Probably has a non-int character)")
            })
        } else alert("Invalid ID (wrong length)")
    })
    //slightly adapted from https://stackoverflow.com/questions/19966417/prevent-typing-non-numeric-in-input-type-number
    //used to prevent people from typing letters in the input fields
    let idlist = ["itemid", "itemprice", "bidinc"]
    idlist.forEach((id) => {
        document.getElementById(id).addEventListener("keypress", function(e) {
            var allowedChars = '0123456789.';

            function contains(stringValue, charValue) {
                return stringValue.indexOf(charValue) > -1;
            }
            var invalidKey = e.key.length === 1 && !contains(allowedChars, e.key) ||
                e.key === '.' && contains(e.target.value, '.');
            invalidKey && e.preventDefault();
        })
    });

    listingSetup()
}

function listingSetup() {
    //from https://stackoverflow.com/questions/38638424/html5-input-type-date-disable-dates-before-today
    //prevents people from selecting a date prior to today 
    let today = new Date().toISOString().split('T')[0];
    document.getElementById("date").setAttribute('min', today);

    document.getElementById("listbutton").addEventListener("click", ()=>{
        let startPrice = document.getElementById("itemprice")
        let minBid = document.getElementById("bidinc")
        let endDate = document.getElementById("date")
        let warning = document.getElementById("warning")
        if (!endDate.valueAsDate) {
            warning.style.display = ""
            warning.innerHTML = "Please select a valid end date for your auction"
        }
        else if (startPrice.value > 2000000000) {
            warning.style.display = ""
            warning.innerHTML = "Please enter a start price no greater than 2000000000 copper"
        }
        else if (minBid.value > 10000) {
            warning.style.display = ""
            warning.innerHTML = "Please enter a minimum bid value no greater than 10000 copper"
        }
        else {
            //if everything is good, post the item.
            let payload = {
                minBid: minBid.valueAsNumber,
                start: startPrice.valueAsNumber,
                end: endDate.valueAsDate.toISOString().split('T')[0],
                id: window.itemid,
                type: "itemlist"
            }
            fetch("/api", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((r)=>{
                if (r.status === 401) location.href = "/login"
                else if (r.status === 403) alert("That item is already up for auction!")
                else if (r.status === 200) location.href = "/auctions/"+window.itemid
            })
        }
    })
}
