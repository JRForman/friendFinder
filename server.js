var express = require("express");
var bp = require("body-parser");
var path =require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");


var PORT = process.env.PORT || 8080;
var app = express();
app.use("/", htmlRoutes);


app.listen(PORT, function(){
    console.log("Listening on ", PORT);
})