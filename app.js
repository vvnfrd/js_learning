

// app.get("/", function(request, response) {
//     response.send("<h2>Главная страница!!!</h2>");
// })

// app.get('/about', function(request, response) {
//     response.send("<h2>О сайте</h2>");
// })

// app.get('/contacts', function(request, response) {
//     response.send("<h2>Контакты</h2>");
// })


// app.listen(3000)

//MIDDLEWARE
// const express = require("express");
// const app = express();
// const fs = require('fs')
// app.use(function(request, response, next) {

//     const now = new Date();
//     const hour = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     const data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
//     fs.appendFile("server.log", data + "\n", function(error){
//         if(error) return console.log(error);
//         console.log('Запись выполнена');
//     });
//     next();
// });

// app.get("/", function(_, response){
//     response.send("Hello");
// });
// app.listen(3000)

//Отправка ответа

// const express = require("express");
// const app = express();
 
// app.use(function (_, response) {
//   response.sendFile(__dirname + "/index.html");
// });

// app.use("/home/foo/bar",function (_, response) {
//   response.sendStatus(404)
// });
 
// app.listen(3000);

//Static files in Express

const express = require("express");
const app = express();
 
app.use(express.static("public"));
 
app.use("/", function(_, response){
     
    response.send("<h1>Главная страница</h1>");
});
 
app.listen(3000);