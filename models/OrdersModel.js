const mongoose = require("mongoose")
const OrdersSchema = new mongoose.Schema  ({
    name: String,
    email : String,
    address : String,
    state : String,
    pincode : Number,
    size : Number,
    mobile : Number,
    street : String,
    quantity: Number,


    collectionId : String,
    collectionImage : String,
     collectionname: String,
    collectionprice: Number,



})

module.exports = mongoose.model('orders' , OrdersSchema)