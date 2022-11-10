const mongoose = require("mongoose")
const Schema = mongoose.Schema()

const SlotSchema = new Schema({
    time:{
        type:String,
        required:true
    },
    capacity:{
        type:String,
        required:true
    },
    m1:{
        type:String,
        required:true
    },
    m2:{
        type:String,
        required:true
    },
    m3:{
        type:String,
        required:true
    },
    m4:{
        type:String
    }
})

module.exports = mongoose.model('Slot',slotSchema);