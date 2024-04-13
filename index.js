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
    // xyz()
    //running the queries on MongoDB
    dbQueries()
})

//  async function xyz() {
//     //logic to insert data into the DB
//     const students = {
//         name: 'raunak',
//         age: 40,
//         email: "rishabh@gmail.com",
//         subjects:["FSWD", "DS","DSA"]
//     }

//   const std_obj = await studentModel.create(students)
//   console.log(std_obj)
// }

async function dbQueries() {
    // add logic to read the data 

    //i want to go and search based on user_id

  try {
     const student = await studentModel.findById("661a2ecf4ef03f29cb71f5b9")
     console.log(student)
  } catch (error) {
    console.log(err)
  }

// i want to go and search based on name 
try {
    const students = await studentModel.find({name:"raunak"})
    console.log(students)
} catch (error) {
    console.log(err)
}
// i want to go and search based on email
try {
    const student = await studentModel.find({email:"rishabh@gmail.com"})
    console.log(student)
} catch (error) {
    console.log(err)
}

/**
 * if you are enterd empty find() then return all the data through DB
 */

// deal with multiple conditions

const stds = await studentModel.where("age").gt("10").where("name").equals("raunak").limit(2)
console.log(stds)


}