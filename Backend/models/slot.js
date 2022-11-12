const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    time:{
        type:String,
        required:true
    },
    capacity:{
        type:String,
        required:true
    },  
    m1:{
        type:String
    },
    m2:{
        type:String,
    },
    m3:{
        type:String,
    },
    m4:{
        type:String
    }
})

module.exports = mongoose.model('Slot',slotSchema);