var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser')
var friends = require("../data/friends.js")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/api/friends", function (req, res) {
    res.send(friends);
})
app.post("/api/friends", function (req, res) {
    var scores = req.body["values[]"];
    console.log(scores);

    // console.log(friends);
    var top = 50;
    var match;
    for (friend in friends) {
        var temp =0;
        for (score in scores){
            temp += Math.abs(parseInt(scores[score])-parseInt(friends[friend].scores[score]));
        }
        if (temp<top){
            top = temp;
            match = friends[friend];
            console.log(friends[friend]);
        }
    }

    res.send(match)
})

module.exports = app;