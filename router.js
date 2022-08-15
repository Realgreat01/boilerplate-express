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

// Using Query
app.get("/name", function(req, res) {
    req.query.first = "firstName";
    req.query.last = "lastName";

//   var firstName = req.query.first;
//   var lastName = req.query.last;
  // OR you can destructure and rename the keys
  // Use template literals to form a formatted string
  console.log(req.query)
  res.json({
    name: `${req.query.first} ${req.query.last}`
  });
});
module.exports = app