const mongoose = require('mongoose')
 
const UserinSchema = new mongoose.Schema ({
    email:String,
    password : String
})
module.exports = mongoose.model("userin" , UserinSchema)