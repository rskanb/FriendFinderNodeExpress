
//Dependencies of NPM packages
var express = require("express");
//var path = require("path");
//var friends =  require("./app/data/friends");
//var fs = require("fs");
var app = express();

//process.env.PORT ||
var PORT =  process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

// app.get("/survey", function(res, res){
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });

// app.get("/api/friends", function(req, res){
//     res.json(friends);
// });