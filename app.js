const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("<h2>Главная страница!!!</h2>");
})

app.get('/about', function(request, response) {
    response.send("<h2>О сайте</h2>");
})

app.get('/contacts', function(request, response) {
    response.send("<h2>Контакты</h2>");
})


app.listen(3000)