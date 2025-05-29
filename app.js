const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
 
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
 
app.use("/users", userRouter);
app.use("/", homeRouter);
 
app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});
 
app.listen(3000, ()=>console.log("Сервер запущен и ожидает подключения..."));