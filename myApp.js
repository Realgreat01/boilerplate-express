let express = require('express');
let app = express();
require('dotenv').config()

app.get("/",(req, res, next) =>{ 
    res.send(`<h1>Hello</h1> <br>
        <a href="/json"> Json </a> <br>
        <a href="/public"> public </a>
        `, 
    "utf8", "text/html")
    console.log(req.ip)
    next();
})

app.use((req, res, next)=>{
    const value = req.method + " " + req.path + " - " + req.ip;
    console.log(value)
    next()
})

app.get("/json", (req, res)=>{
    let value = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
            return res.json({message: value.toUpperCase()});
        } else {
            return res.json({message: value})
        }
})
app.get("/public", (req, res) => {
    res.sendFile(__dirname+"/views/index.html")
})

app.use("/public",express.static(__dirname+"/public"))
app.listen(5500)

























 module.exports = app;
