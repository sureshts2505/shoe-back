
const express = require("express")


const    SignupModel  = require("../models/SignupModel")


const router = express.Router()


//singup - users register 

router.post('/' , async (req , res) => {
    const { email  , password , cpassword , name  , mobile} = req.body

    let  exist = await SignupModel.findOne({ email: email }) 
    if (exist) {
        return res.status(400).json({ message : "Email already Exist"})
    }

    if (password != cpassword) {
        return  res.status(400).json({ message : "Password and Confirm does not Match" })

    }

    const signup = new SignupModel(req.body)
    const result = await signup.save()
    res.send(result)
})

module.exports = router;