const express = require("express")
const app = express();
app.get("/", (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    firstName = "firstname"
    lastName = "lastname"
  // Use template literals to form a formatted string
    res.json({
        name: `${firstName} ${lastName}`
    });
});

module.exports = app