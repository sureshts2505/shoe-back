const mongoose = require("mongoose")

const CollectionSchema = new mongoose.Schema ({
    Image : String, 
     name : String,
    description : String,
    price : Number,
    sizes : Number,
    category : String,
    meterial : String ,
    color : String

})
module.exports = mongoose.model("Collection", CollectionSchema)