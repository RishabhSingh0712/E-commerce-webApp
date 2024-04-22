/**
 * i need to intercept this
 */
const authcontroller = require("../controllers/auth.controller")
const authMW  = require("../middlewares/auth.mw")

module.exports =(app)=>{
    app.post ("/ecom/api/v1/auth/signup",[authMW.verifySignUpBody],authcontroller.signup)
 
}