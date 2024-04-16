/**
 * this will be the starting file of the project
 */
const express = require ("express")
const mongoose = require ("mongoose")
const app = express()
const server_config = require("./configs/server.configs.js")
const db_config = require("./configs/db.configs.js")
const user_model = require ("./models/user.model.js")
const bcrypt = require("bcryptjs")


/**
 * create a admin user at the starting of the application
 * if not already present 
 */

// connection with mongoDB
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection
 
db.on("error",()=>{
console.log("DB Connection Failed")
})
db.once("open", ()=>{
    console.log("DB Connected Sucessfully")
    init()
})

async function init() {
    let user = await user_model.findOne({userId: "admin1"})
    if (user) {
        console.log ("admin is present")
        return
    }
    try {
        user = await user_model.create({
            name:"rishabh singh",
            userId:"admin1",
            email:"rishabh@test.com",
            userType:"ADMIN",
            password:bcrypt.hashSync("tessst01",8)
        })
        console.log("Admin created", user)

    } catch (error) {
        console.log("error while creating the admin", err)
    }
}

/**
 * start the server
 */
app.listen(server_config.PORT,()=>{
    console.log("server started at port num : ",server_config.PORT)
})