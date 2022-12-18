const Slot = require("../models/slot");
const User=require("../models/user")
const moment=require("moment")

module.exports.newslot = async (req, res) => {
    var { time, capacity, email, member, gender,destination } = req.body;
    const newslot = new Slot({ time, capacity, email, gender ,destination});
    newslot.members.push(member)
   await newslot.save();
    console.log(newslot);
    res.status(200).json({ message: "Success" })
}

module.exports.slots = async (req, res) => {
    //today
    const today =  moment().format('YYYY-MM-DThh:mm')
    //tomorrow timestamp
    const tomorrow = moment().add('1', 'days').format('YYYY-MM-DThh:mm');
    var slots = await Slot.find({ $and: [ { gender: req.params.gender }, { time: { $gt: today } }] }).sort({"time":1})
    res.status(200).json(slots)
}

module.exports.viewslot = async (req, res) => {
    var slot = await Slot.findById(req.params.slotid).populate('members');
    res.status(200).json(slot)
}

module.exports.deleteslot = async (req, res) => {
    var slot = await Slot.findByIdAndDelete(req.params.slotid);
    res.status(200).json({ message: "Success" });
}

module.exports.join = async (req, res) => {
    var { member } = req.body;
    var { slotid } = req.params
    var slot = await Slot.findById(slotid);
    if (slot) {
        slot.members.push(member)
    }
    await slot.save()
    res.status(200).json({ message: "Joined" });
}

module.exports.leave = async (req, res) => {
    var { member } = req.body;
    var { slotid } = req.params
    var slot = await Slot.findById(slotid);
    if (slot) {
        slot.members = slot.members.filter(item => !item.equals(member))
    }
    await slot.save()
    res.status(200).json({ message: "Success" });
}