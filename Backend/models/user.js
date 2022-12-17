const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true,
        default:"-"
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User',userSchema);