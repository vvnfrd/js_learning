const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersbd",
  password: "13799731"
}).promise();
connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

 connection.query("SELECT * FROM users")
 .then(result =>{
   console.log(result);
 })
 .catch(err =>{
   console.log(err);
 });

 connection.end(function(err) {
    if(err) {
        return console.log("Ощибка" + err.message);
    }
    console.log("Подключение закрыто")
 })