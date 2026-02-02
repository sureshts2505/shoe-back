const mongoose = require("mongoose")

const CollectionSchema = new mongoose.Schema ({
    Image : String, 
     name : String,
    description : String,
    price : Number,
    sizes : [String],
    category : String,
    meterial : String ,
    color : String

})
module.exports = mongoose.model("Collection", CollectionSchema)