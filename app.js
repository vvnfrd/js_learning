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