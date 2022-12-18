const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    time: {
        type: String,
        required: true
    },
    gender: {
        type:String,
        required:true
    },
    capacity: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    members:{ 
    type:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'User', 
    },
    ],
    validate: [limit, 'Array exceeds the limit of 4']
}

})

function limit(val) {
    return val.length <= 4;
  }
module.exports = mongoose.model('Slot', slotSchema);