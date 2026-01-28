

const express = require("express")

const CollectionModel = require("../models/CollectionModel")

const router = express.Router()

//read
router.get('/', async (req, res) => {
  const collection = await CollectionModel.find()
  res.json({ collection })
})

router.post('/', async (req, res) => {
    const collection = new CollectionModel(req.body)
   const result =  await collection.save()
   res.json ({ result })
})

router.get('/:id', async (req, res)=>{
    const id = req.params.id
    const collection = await CollectionModel.findOne({ _id: id })
    res.json ({ collection })
})

router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    const result = await CollectionModel.deleteOne({ _id : id })
    res.json ({ result })
})

router.put('/:id', async (req, res)=>{
    const id = req.params.id
    const collection = await CollectionModel.updateOne({ _id : id } , req.body)
    res.json ({ collection })
})
 module.exports = router;