const mongoose = require("mongoose")
const url = "mongodb+srv://sureshts2505_db_user:suresh2505@cluster0.njuyyn0.mongodb.net/shoes?appName=Cluster0"

mongoose.connect(url)
.then(()=> console.log("connected to MongoDB") )
.catch((err)=>console.log(err.message))