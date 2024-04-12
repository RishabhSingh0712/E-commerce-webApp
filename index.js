// import mongoose from "mongoose";
 const mongoose = require("mongoose")
// write the code to connect with MongoDB

mongoose.connect("mongodb://localhost/be_demo")

const db = mongoose.connection // start the connection with mongodb

db.on("error",()=>{
    console.log("DB connection failed")
})
db.once ("open",()=>{
    console.log("DB connected sucessfully")
})