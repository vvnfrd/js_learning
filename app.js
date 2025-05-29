const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "usersbd",
    password: "13799731"
}).promise()

// const sql = "INSERT INTO users (name, age) VALUES(?, ?)";
// const data = ["Bill", 25];
// pool.query(sql, data, function(err, results) {
//   if(err) console.log(err);
//   console.log(results);
// });
 
// получение объектов
pool.query("SELECT * FROM users", function(err, results) {
    if(err) console.log(err);
    console.log(results);
});

pool.end(function(err) {
    if (err) {
      console.log(err.message);
    }
    console.log("пул закрыт");
  });
  
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "usersbd",
//   password: "13799731"
// }).promise();
// connection.connect(function(err){
//     if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//     }
//  });

//  connection.query("SELECT * FROM users")
//  .then(result =>{
//    console.log(result);
//  })
//  .catch(err =>{
//    console.log(err);
//  });

//  connection.end(function(err) {
//     if(err) {
//         return console.log("Ощибка" + err.message);
//     }
//     console.log("Подключение закрыто")
//  })