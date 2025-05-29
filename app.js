const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
  
 
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
  
app.use("/users", userRouter);;
app.use("/", homeRouter);
  
app.use(function (req, res) {
    res.status(404).send("Not Found")
});
 
async function main() {
 
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/userbd");
        app.listen(3000);
        console.log("Сервер ожидает подключения...");
    }
    catch(err) {
        return console.log(err);
    }
}
main(); // запускаем приложение
 
// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async() => {
      
    await mongoose.disconnect();
    console.log("Приложение завершило работу");
    process.exit();
});