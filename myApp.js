let express = require('express');
let app = express();
require('dotenv').config()

app.get("/", ((req, res) =>{ 
    res.send(`<h1>Hello</h1> <br>
        <a href="/json"> Json </a> <br>
        <a href="/public"> public </a>
        `, 
    "utf8", "text/html")
}))

app.get("/json", (req, res)=>{
    let value = "Hello World"
    if (process.env.MESSAGE_STYLE === "uppercase") {
        value = "Hello World".toUpperCase();
        } else {
        value = "Hello World";
        }
    res.json({message: value})
})
app.get("/public", (req, res) => {
    res.sendFile(__dirname+"/views/index.html")
})

app.use("/public",express.static(__dirname+"/public"))
app.listen(5500)

























 module.exports = app;
