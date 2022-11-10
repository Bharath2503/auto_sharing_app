const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(4000,()=>{
    console.log("Port 4000")
})