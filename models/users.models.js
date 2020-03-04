const mongoose = require("mongoose");
const { Schema } = mongoose;

const USER = new Schema({
    user:{type:String,required:true, unique:true},
    name:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    confirm:{type:Date},
    log:{type:Date},
    created:{type:Date,default:Date.now()}
});

module.exports = mongoose.model("USERS", USER);