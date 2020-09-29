const fetch = require("node-fetch")
fetch("https://hordes.io/api/item/get", {
    method: "POST",
    body: JSON.stringify({
        auction:1,
        // ids: ids
        ids: [101675459]
    }),
    headers: {
        Cookie: "sid=s%3AW8eVcC9e1x9G3OU-P_HH023G9iSCTOvP.A0x7VORjMS6fny8siypqVvCIfZQUYOuEtdWjoa14a%2Fc; party="
    }
}).then((r)=>r.json()).then((result)=>console.log(result))