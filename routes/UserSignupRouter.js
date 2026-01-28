
const express = require("express")


const UserupModel = require("../models/UserupModel")


const router = express.Router()


//singup - users register 

router.post('/' , async (req , res) => {
    const { email  , password , confirmpassword , name  , mobile} = req.body

    let  exist = await UserupModel.findOne({ email: email }) 
    if (exist) {
        return res.status(400).json({ message : "Email already Exist"})
    }

    if (password != confirmpassword) {
        return  res.status(400).json({ message : "Password and Confirm does not Match" })

    }

    const user = new UserupModel(req.body)
    const result = await user.save()
    res.send(result)
})

module.exports = router;