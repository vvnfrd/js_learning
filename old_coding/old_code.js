// const http = require("http");
// http.createServer(function(request, response) {
//     response.end('Hello NodeJS!');
// }).listen(3000, 'localhost', function(){
//     console.log('Сервер начал прослушивание запросов на порту 3000')
// })


// const {date, printMessage} = require("./greeting")
// const os = require("os")
// const userName = os.userInfo().username;

// console.log(`Дата запроса: ${date}`)
// printMessage(userName)


// const User = require('./user');

// const zetmarley = new User("Zetmarley", 24);
// zetmarley.print();
// zetmarley.sayHi();

// const messages = require('./messages');

// messages.getMorningMessage();
// messages.getEveningMessage();

// const nodePath = process.argv[0];
// const appPath = process.argv[1];
// const username = process.argv[2];
// const userage = process.argv[3];

// console.log("nodePath:", nodePath);
// console.log("appPath:", appPath);
// console.log();
// console.log("name:", username);
// console.log("age:", userage);

// const lodash = require('lodash')

// const people = ["Tom", "Sam", "Bob"];
// const employees = ["Tom", "Alice", "Sam"];

// const result1 = lodash.union(people, employees);
// console.log(result1);

// const result2 = lodash.intersection(people, employees);
// console.log(lodash);

// const express = require("express");

// const app = express();

// app.get("/", function(_, response) {
//     response.end("Hello OPA OPA OPA");
// });

// app.listen(3000, function(){ console.log("http://localhost:3000/")})

// const http = require("http");

// let message = "Goodbye World!";
// http.createServer(function(request, response){

//     console.log(message);
//     response.end(message);
// }).listen(3000, "localhost", ()=>{
//     console.log("Сервер начал прослушивание запросов")
// }

// const fs = require("fs");

// fs.readFile("hello.txt", function(error, data){
//     if (error) {
//         return console.log(error);
//     }
//     console.log(data.toString())
// })
// console.log("Асинхронное чтение файлов")

// const os = require("os");

// const username = os.userInfo().username
// const data = `Hello, ${username}!\n`

// fs.writeFile("hello2.txt", data, function(error){
//     if (error) {
//         return console.log(error);
//     }
//     console.log("Файл записан")
// })

// const data2 = `How are you?\n`

// fs.appendFile("hello2.txt", data2, function(error){
//     if (error) {
//         return console.log(error);
//     }
//     console.log("Файл записан")
// })

// fs.stat("README.md", (error, stats) => {
//     if (error) return console.error(error);
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats);
// })

// fs.unlink("hello2.txt", (error)=> {
//     if (error) return console.log(error);
//     console.log("Файл удалён")
// })

// fs.mkdir("test", (error)=> {
//     if (error) return console.log(error);
//     console.log("Folder created");
// });

// fs.readdir("messages", (error, files)=> {
//     if (error) return console.log(error);
//     files.forEach((file) => console.log(file));
// })

// fs.rmdir("test", (error)=> {
//     if (error) return console.log(error);
//     console.log("Folder deleted");
// })

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// const eventName = "opa";

// emitter.on(eventName, function(data){
//     console.log(data);
// });

// class User extends EventEmitter {
//     constructor(username) {
//         super();
//         this.name = username;
//     }
//     sayHi() {
//         console.log(`Привет, меня зовут ${this.name}!`);
//         this.emit(eventName, this.name)
//     }
// }

// const tom = new User("Tom");
// tom.on(eventName, function(username){
//     console.log("Привет,", username)
// });

// tom.sayHi();

// const fs = require("fs");

// const writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир!\n")
// writeableStream.write("Привет мир!\n")
// writeableStream.write("Привет мир!\n")

// const readableStream = fs.createReadStream("hello.txt");
// readableStream.on("hello.txt", function(chunk){
//     console.log(chunk.toString());
// })

// const readableStream = fs.createReadStream("hello.txt");
// const writeableStream = fs.createWriteStream("some.txt");

// readableStream.pipe(writeableStream);

// const fs = require("fs");
// const zlib = require("zlib");
  
// const readableStream = fs.createReadStream("hello.txt");
  
// const writeableStream = fs.createWriteStream("hello.txt.gz");
  
// const gzip = zlib.createGzip();
  
// readableStream.pipe(gzip).pipe(writeableStream);

// ГЛАВА 3. СЕРВЕР

// const http = require("http");

// const server = http.createServer(function(request, response){

//     response.setHeader("Content-Type", "text/html; charset=utf-8;");

//     if(request.url === "/home" || request.url === "/"){
//         response.write("<h2>Home</h2>");
//     }
//     else if(request.url == "/about"){
//         response.write("<h2>About</h2>");
//     }
//     else if(request.url == "/contact"){
//         response.write("<h2>Contacts</h2>");
//     }
//     else{
//         response.write("<h2>Not found</h2>");
//     }
//     response.end();
    
// });
// server.listen(3000, function(){console.log("http://localhost:3000/")});

// method 1
// const http = require('http');
// const fs = require('fs');

// http.createServer(function(req, res){

//     console.log('Запрошенный адрес:', req.url);
//     console.log(req.url)
//     const filePath = req.url.substring(1);
//     console.log(filePath)
//     fs.access(filePath, fs.constants.R_OK, err => {
//         if (err){
//             res.statusCode = 404;
//             res.end("Resourse not found!");
//         }
//         else{
//             fs.createReadStream(filePath).pipe(res);
//         }
//     })
// }).listen(3000, function(){
//     console.log('server started')
// })

//Получение данных от клиента

// const http = require("http");
// const fs = require("fs");
 
// http.createServer((request, response) => {
      
//      if (request.url === "/user") {
         
//         let data = "";
//         request.on("data", chunk => {
//             data += chunk;
//         });
//         request.on("end", () => {
//             console.log(data);
//             response.end("Данные успешно получены");
//         });
//     }
//     else{
//         fs.readFile("index.html", (error, data) => response.end(data));
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));

// Отправка форм

// const http = require("http");
// const fs = require("fs");
  
// http.createServer(async (request, response) => {
        
//     if(request.url == "/user"){
           
//           let body = "";   // буфер для получаемых данных
//          // получаем данные из запроса в буфер
//           for await (const chunk of request) {
//             body += chunk;
//           }
//         // для параметра name
//         let userName = "";
//         // для параметра age
//         let userAge = 0;
//         // разбиваем запрос на параметры по символу &
//         const params = body.split("&");
//         // проходим по всем параметрам и определяем их значения
//         for(param of params){
//             // разбиваем каждый параметр на имя и значение
//             const [paramName, paramValue] = param.split("=");
//             if(paramName === "username") userName = paramValue;
//             if(paramName === "userage") userAge = paramValue;
//         }
//         console.log(userName, userAge)
//         response.end(`Your name: ${userName}  Your Age: ${userAge}`);
//     }
//     else{
//         fs.readFile("index.html", (_, data) => response.end(data));
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));