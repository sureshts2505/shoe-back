const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema ({
    name : String,
    email : String,
    password : String,
    cpassword : String,
    mobile : Number
})

module.exports = mongoose.model("signups", signupSchema)