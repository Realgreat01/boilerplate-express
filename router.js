const express = require("express");
const app = express()
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next()}, 
    (req, res) => {
    res.send({ time: req.time });
}
);

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

module.exports = app