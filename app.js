const express = require("express");
const app = express();

app.get("/", function(request, response){

    response.send("Hello Test");
});

module.exports.app = app;