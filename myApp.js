let express = require('express');
let app = express();
console.log("Hello World")

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/index.html")
})

app.listen(5500)






























 module.exports = app;
