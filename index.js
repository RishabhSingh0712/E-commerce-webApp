// import mongoose from "mongoose";
 const mongoose = require("mongoose")
 const studentModel = require("./model/student.model")
// write the code to connect with MongoDB

mongoose.connect("mongodb://localhost/be_demo")

const db = mongoose.connection // start the connection with mongodb

db.on("error",()=>{
    console.log("DB connection failed")
   
    
})
db.once ("open",()=>{
    console.log("DB connected sucessfully")
     //logic to insert data into the DB
    xyz()
})

 async function xyz() {
    //logic to insert data into the DB
    const students = {
        name: 'raunak',
        age: 40,
        email: "rishabh@gmail.com",
        subjects:["FSWD", "DS","DSA"]
    }

  const std_obj = await studentModel.create(students)
  console.log(std_obj)
}