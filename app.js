const mongoose = require("mongoose");
const Schema = mongoose.Schema;
   
const userScheme = new Schema({
    name: String,
    age: Number
});
 
const User = mongoose.model("User", userScheme);
 
async function main() {
 
    await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");
     
    const tom = new User({name: "Tom", age: 34});
    // добавляем объект в БД
    await tom.save();
    console.log(tom);
}
main().catch(console.log).finally(async()=>await mongoose.disconnect());