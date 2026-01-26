const mongoose = require("mongoose")
const OrdersSchema = new mongoose.Schema  ({
    Name : String,
    Email : String,
    Phone : Number,
    Message : String

})

module.exports = mongoose.model('orders' , OrdersSchema)