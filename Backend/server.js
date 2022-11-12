const express = require("express")
const mongoose = require("mongoose")
const { newslot, slots, viewslot } = require("./controllers/slot")

const app = express()

const dburl = "mongodb://localhost:27017/auto"
mongoose.connect(dburl);
const db=mongoose.connection;
db.on("error",()=>console.log("connection error:"));
db.once("open",()=>{
    console.log("Database Connected");    
});

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/newslot",newslot);

app.get("/slots",slots);

app.get("/viewslot/:id",viewslot);

app.listen(4000,()=>{
    console.log("Port 4000")
})