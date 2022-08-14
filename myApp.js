let express = require('express');
let app = express();
console.log("Hello World")

app.get("/public", (req, res) => {
    res.sendFile(__dirname+"/views/index.html")
})
app.use("/public",express.static(__dirname+"/public"))
app.listen(5500)

























 module.exports = app;
