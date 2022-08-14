let express = require('express');
let app = express();
console.log("Hello World")

app.get("/", (req, res) => {
    res.send("Hello Express")
})
app.listen(3000)
































 module.exports = app;
