const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema ({
    name: String,
    email:String,
    rating : String,
    review : String,

     collectionId : String,
    collectionImage : String,
     collectionname: String,
    collectionprice: Number,

   
})

module.exports = mongoose.model("review", ReviewSchema)