const express = require("express")

const ReviewModel = require('../models/ReviewModel')


const router = express.Router()

//read

router.get('/' , async (req, res)=>{
    const review = await ReviewModel.find()
    res.json({ review })
})

router.post('/', async (req, res)=>{
    const review = new ReviewModel(req.body)
    const result = await review.save()
    res.json({ result })
})

router.get('/:id', async (req, res)=>{
    const id = req.params.id
    const review = await ReviewModel.findOne({ _id: id })
    res.json ({ review })
})

router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    const review = await ReviewModel.deleteOne({ _id: id })
    res.json({ review })
})

router.put('/:id', async (req, res)=>{
    const id = req.params.id
    const review = await ReviewModel.updateOne({ _id: id  }, req.body)
    res.json({ review })
})

module.exports = router;