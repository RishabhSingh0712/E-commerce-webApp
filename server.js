/**
 * this will be the starting file of the project
 */
const express = require ("express")
const mongoose = require ("mongoose")
const app = express()
const server_config = require("./configs/server.configs.js")


/**
 * create a admin user at the starting of the application
 * if not already present 
 */

// connection with mongoDB
mongoose.connect()


/**
 * start the server
 */
app.listen(server_config.PORT,()=>{
    console.log("server started at port num : ",server_config.PORT)
})