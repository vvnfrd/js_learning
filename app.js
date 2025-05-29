const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

const mongoClient = new MongoClient(url);

async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb")
        const collection = db.collection("users");
        const user = {name: "Tom", age: 28}
        const result = await collection.insertOne(user);
        console.log(result);
        console.log(user);
        console.log(collection)
    }catch(err) {
        console.log("Возникла ошибка");
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
        console.log("Подключение закрыто");
    }
}
run().catch(console.log);