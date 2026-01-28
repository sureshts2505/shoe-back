
const MongoClient = require("mongodb").MongoClient
const url = "mongodb+srv://sureshts2505_db_user:suresh2505@cluster0.njuyyn0.mongodb.net/shoes?appName=Cluster0"
const dbName = "shoes";

MongoClient.connect(url)
.then((conn)=>{
    const dbo = conn.db(dbName)
    console.log("DataBase connected to orders")
  dbo.createCollection("orders")
   dbo.createCollection('collection')
 dbo.createCollection('reviews')
 dbo.createCollection('signup')
 dbo.createCollection('login')
    .then(()=>{
        console.log("Created")   })

.catch(err =>console.log(err))
})

.catch((err)=>console.log(err))

