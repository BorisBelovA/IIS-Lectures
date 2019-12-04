// const users = [];
 
// module.exports= class User{
 
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     save(){
//         users.push(this);
//     }
//     static getAll(){
//         return users;
//     }
// }

const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
    id: Number,
    name: String,
    age: Number,
});
module.exports = mongoose.model("usersdb", userScheme);