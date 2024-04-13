// defiend the schema of students collection to be stored in the DB

const mongoose = require ("mongoose")

// schema 

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true ,
        min: 18
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        minLength:15
    },
    subjects:[String],
    createdAt:{
        type: Date,
        immutable: true,
        default:()=>{
            return Date.now()
        }
    }
})

//Go ahead and create corresponding collections in DB

module.exports = mongoose.model("Student",studentSchema)