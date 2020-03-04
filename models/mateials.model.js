const mongoose = require("mongoose");
const { Schema } = mongoose;

const MATERIAL = new Schema({
    name:{type:String,required:true},
    deformation:{type:Array,required:true},
    elasticModule:{type:Number,required:true},
    user:{type:String,required:true},
    created:{type:Date,default:Date.now()}
});

module.exports = mongoose.model("MATERIALS", MATERIAL);