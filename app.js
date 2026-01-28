require("./db");
const express = require("express");
const cors = require("cors");


const OrderRouter = require("./routes/OrderRouter");
const CollectionRouter = require("./routes/CollectionRouter");
const ReviewRouter = require('./routes/ReviewsRouter')
const LoginRouter = require("./routes/LoginRouter")
const SignupRouter = require('./routes/SignupRouter')





const app = express();
app.use(cors());
app.use(express.json());

app.use("/order", OrderRouter);
app.use("/collection", CollectionRouter)
app.use("/reviews" , ReviewRouter)
app.use('/login', LoginRouter)
app.use('/signup', SignupRouter)

app.listen(5000, () => console.log(" API Started"));
