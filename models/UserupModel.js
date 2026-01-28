const mongoose = require("mongoose")

const UserupSchema = new mongoose.Schema ({
    name : String,
    email : String,
    password : String,
    confirmpassword : String,
    mobile : Number
})

module.exports = mongoose.model("userup", UserupSchema)