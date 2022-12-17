const express = require("express")
const mongoose = require("mongoose")
const { newslot, slots, viewslot, deleteslot, join, leave } = require("./controllers/slot")
const { signup,login } = require("./controllers/user")

const app = express()

//DB Connection
// const dburl = "mongodb://localhost:27017/auto"
const dburl = "mongodb+srv://lokesh:lokesh123@cluster1.kzdwtdw.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dburl);
const db=mongoose.connection;
db.on("error",()=>console.log("connection error:"));
db.once("open",()=>{
    console.log("Database Connected");    
});

//body
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//user
app.post("/user/signup",signup);

app.post("/user/login",login);

//slots
app.post("/newslot",newslot);

app.get("/slots",slots);

app.get("/viewslot/:slotid",viewslot);

app.get("/deleteslot/:slotid",deleteslot);

app.post("/join/:slotid",join);

app.post("/leave/:slotid",leave);

app.listen(4000,()=>{
    console.log("Port 4000")
})