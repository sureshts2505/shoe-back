
const express = require("express")


const router = express.Router()
//read
router.get('/', async (req, res) => {
  const orders = await OrdersModel.find()
  res.json({ orders })
})

router.post('/', async (req, res) => {
    const orders = new OrdersModel(req.body)
   const result =  await orders.save()
   res.json ({ result })
})

router.get('/:id', async (req, res)=>{
    const id = req.params.id
    const orders = await OrdersModel.findOne({ _id: id })
    res.json ({ orders })
})

router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    const result = await OrdersModel.deleteOne({ _id : id })
    res.json ({ result })
})

router.put('/:id', async (req, res)=>{
    const id = req.params.id
    const orders = await OrdersModel.updateOne({ _id : id } , req.body)
    res.json ({ orders })
})
 module.exports = router;