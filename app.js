const express = require("express");
   
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();
   
app.post("/user", jsonParser, function (request, response) {
    const user = request.body;
    // console.log(user);
    if(!user) return response.sendStatus(400);
    const responseText = `Your name: ${user.name}  Your age: ${user.age}`;
    response.json({message: responseText}); // отправляем ответ
});
   
app.get("/", function(request, response){
    response.sendFile(__dirname + "/public/index.html");
});
   
app.listen(3000);