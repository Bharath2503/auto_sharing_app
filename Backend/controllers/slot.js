const Slot = require("../models/slot");

module.exports.newslot = async(req,res)=>{
    var {time, capacity, email} = req.body;
    console.log({time, capacity, email});
    const newslot = new Slot({time, capacity, email});
    await newslot.save();
    console.log(newslot);
}

module.exports.slots = async(req,res)=>{
    var slots = await Slot.find({})
    res.json(slots)
}

module.exports.viewslot = async (req,res)=>{
    var slot = await Slot.findById(req.params.id);
    res.json(slot)
}