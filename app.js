require("./db");
const express = require("express");
const cors = require("cors");


const OrderRouter = require("./routes/OrderRouter");
const CollectionRouter = require("./routes/CollectionRouter");
const ReviewRouter = require('./routes/ReviewsRouter')
const UserSigninRouter = require('./routes/UserLogin')
const UserSignupRouter = require('./routes/UserSignupRouter')





const app = express();
app.use(cors());
app.use(express.json());

app.use("/order", OrderRouter);
app.use("/collection", CollectionRouter);
app.use("/reviews" , ReviewRouter)
app.use('/login', UserSigninRouter)
app.use('/signup', UserSignupRouter)

app.listen(5000, () => console.log(" API Started"));
