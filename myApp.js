let express = require('express');
let app = express();
const router = require("./router.js")
require('dotenv').config()

app.use(router)
app.get("/",(req, res, next) =>{ 
    res.send(`<h1>Hello</h1> <br>
        <a href="/json"> Json </a> <br>
        <a href="/public"> public </a> <br>
        <a href="/now"> now </a> <br>
        `, 
    "utf8", "text/html")
    console.log(req.ip)
    next();
})

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
