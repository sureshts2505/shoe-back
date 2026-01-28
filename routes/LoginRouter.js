const express = require("express")
const jwt = require("jsonwebtoken");


const LoginModel = require("../models/LoginModel");



const router = express.Router()

//Login 

router.post('/' , async (req , res ) => {
     const { email , password } = req.body
     const user = await LoginModel.findOne ({ email : email })
     if (!user) {
          return  res.status(400).json({ message : "User not Found" })

     }
     if (user.password !== password ){
         return  res.status(400).json({ message : "Invalid Password" })


     }
           const payload = {
            id: user._id   

           }
      // Create a token
         
       const token  = jwt.sign(payload, 'jsonsecret', { expiresIn: "1h" });

      res.send(token)

    })
    module.exports = router;