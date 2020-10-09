//make items look pretty or something idk i'm not a ui designer
var colors = ["#00cc00"]

//set up everything

//download item and stat descriptions
fetch("/itemdisplay/data.json").then((r) => r.json()).then((data) => {
    window.hordes = data
})

window.desktopDisplay = (item) => {
    let ItemDiv = document.createElement("div")
    ItemDiv.class = "" //something here for late idk
    ItemDiv.innerHTML = ""
}

window.sellDisplay = (item) => {
    document.getElementById("name").innerHTML = hordes.items[item.type][item.tier].name
    document.getElementById("typetier").innerHTML = `Tier ${item.tier+1} ${item.type}`
    document.getElementById("itemimage").src = `https://hordes.io/assets/items/${item.type}/${item.type}${item.tier}_q${_quality(item.quality)}.webp?v=4448424`

    document.getElementById("regstats").innerHTML = ""
    document.getElementById("bonusstats").innerHTML = ""
    Object.getOwnPropertyNames(item.stats).forEach((statnum) => {
        let statname = hordes.ui.stats.array[statnum]
        let stat = item.stats[statnum]
        if (stat.type === "base") {
            let div = document.getElementById("regstats")
            let p = document.createElement("p")
            p.innerHTML = (statname !== "Block" && statname !== "Critical") ? `${stat.value} ${statname}` : `${stat.value/10}% ${statname}`
            div.appendChild(p)
        }
        if (stat.type === "bonus") {
            let div = document.getElementById("bonusstats")
            let p = document.createElement("p")
            p.innerHTML = (statname !== "Block" && statname !== "Critical") ? `+${stat.value} ${statname}` : `+${stat.value/10}% ${statname}`
            div.appendChild(p)
        }
    })
    //unhide everything at the end
    document.getElementById("itemdiv").style.display = ""
}

function _quality(per) {
    if (per > 90) return 3
    if (per > 70) return 2
    if (per > 50) return 1
    return 0
}
