var express = require("express");
var bp = require("body-parser");
var path =require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");


var PORT = process.env.PORT || 8080;
var app = express();
app.use('/data', express.static(path.join(__dirname + '/app/data/')));
app.use('/boots', express.static(path.join(__dirname + "/node_modules/bootstrap/dist/")))
app.use('/j', express.static(path.join(__dirname + "/node_modules/jquery/dist/")))

app.use("/", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function(){
    console.log("Listening on ", PORT);
    console.log(__dirname);
})
