const Slot = require("../models/slot");

module.exports.newslot = async(req,res)=>{
    var {time, capacity, email} = req.body;
    console.log({time, capacity, email});
    const newslot = new Slot({time, capacity, email});
    await newslot.save();
    console.log(newslot);
    res.send("Slot Created");
}

module.exports.slots = async(req,res)=>{
    var slots = await Slot.find({})
    res.json(slots)
}

module.exports.viewslot = async (req,res)=>{
    var slot = await Slot.findById(req.params.id);
    res.json(slot)
}

module.exports.deleteslot = async (req,res)=>{
    var slot = await Slot.findByIdAndDelete(req.params.id);
    res.send("Success");
}

module.exports.join = async(req,res)=>{
    if(req.body.m1){
        var {m1} = req.body;
        var slot = await Slot.findByIdAndUpdate(req.params.id , {m1});
        console.log("m1");
    }
    else if(req.body.m2){
        var {m2} = req.body;
        var slot = await Slot.findByIdAndUpdate(req.params.id , {m2})
        console.log("m2");
    }
    if(req.body.m3){
        var {m3} = req.body;
        var slot = await Slot.findByIdAndUpdate(req.params.id , {m3});
        console.log("m3");
    }
    else if(req.body.m4){
        var {m4} = req.body;
        var slot = await Slot.findByIdAndUpdate(req.params.id , {m4});
        console.log("m4");
    }
    await slot.save()
}

module.exports.leave = async(req,res)=>{
    if(req.body.m1){
        var {m1} = req.body;
        await Slot.findByIdAndUpdate(req.params.id,{m1:""});
        console.log("m1");
    }
    else if(req.body.m2){
        var {m2} = req.body;
        await Slot.findByIdAndUpdate(req.params.id,{m2:""});
        console.log("m2");
    }
    if(req.body.m3){
        var {m3} = req.body;
        await Slot.findByIdAndUpdate(req.params.id,{m3:""});
        console.log("m3");
    }
    else if(req.body.m4){
        var {m4} = req.body;
        await Slot.findByIdAndUpdate(req.params.id,{m4:""});
        console.log("m4");
    }
}