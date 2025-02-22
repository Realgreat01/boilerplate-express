let express = require('express');
let app = express();
const bodyParser = require("body-parser")
const query = require("./query")
const router = require("./router.js")
require('dotenv').config()

app.use(bodyParser.json())
app.use(router)
app.get("/",(req, res, next) =>{ 
    res.send(`<h1>Hello</h1> <br>
        <a href="/json"> Json </a> <br>
        <a href="/public"> public </a> <br>
        <a href="/now"> now </a> <br>
        <a href="/name"> name </a> <br>
        `, 
    "utf8", "text/html")
    console.log(req.ip)
    next();
})

app.use("/name", query)

app.get("/:word/echo", (req, res, next) => {
    res.json({echo: req.params.word})
})
app.use((req, res, next)=>{
    const value = req.method + " " + req.path + " - " + req.ip;
    console.log(value)
    next()
})

app.use("/public",express.static(__dirname+"/public"))
app.listen(5500)

























 module.exports = app;
