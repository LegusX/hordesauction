//handle all post requests
exports.post = function(req,res) {
    res.send(req.body)
}
exports.get = function(req,res) {
    res.send("hiya")
}