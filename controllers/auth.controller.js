/**
 * I need to write the controller /logic to register a user
 */
const bcrypt = require ("bcryptjs")
const user_model = require("../models/user.model")

exports.signup= async(req,res,next)=>{
    /**
     * Logic to create the user
     */

    //1. Read the request body
    const request_body = req.body

    //2. Insert the data in the users collections in mongoDB
    const userObj = {
        name : request_body.name,
        userId : request_body.userId,
        email : request_body.email,
        userType : request_body.userType,
        password : bcrypt.hashSync(request_body.password)

    }
        try {
        const user_created = await user_model.create(userObj);
        /**
         * return the user
         */
        const res_obj = {
            name: user_created.name,
            userId : user_created.userId,
            email: user_created.email,
            userType: user_created.userType,
            createdAt: user_created.createdAt,
            updateAt: user_created.updatedAt
        }
        res.status(201).send (res_obj)

    } catch (error) {
        console.log("Error while registering the user");
        res.status(500).send({
            message: "some error happened while registering the user"
        })
    }
    
}