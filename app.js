require('./db')

const express = require("express")
const OrdersModel = require('./Model/OrdersModel')
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

//read
app.get('/orders', async (req, res) => {
  const orders = await OrdersModel.find()
  res.json({ orders })
})

app.post('/orders', async (req, res) => {
    const orders = new OrdersModel(req.body)
   const result =  await orders.save()
   res.json ({ result })
})

app.get('/orders/:id', async (req, res)=>{
    const id = req.params.id
    const orders = await OrdersModel.findOne({ _id: id })
    res.json ({ orders })
})

app.delete('/orders/:id', async (req, res)=>{
    const id = req.params.id
    const result = await OrdersModel.deleteOne({ _id : id })
    res.json ({ result })
})

app.put('/orders/:id', async (req, res)=>{
    const id = req.params.id
    const orders = await OrdersModel.updateOne({ _id : id } , req.body)
    res.json ({ orders })
})

app.listen(5000, () => console.log('API Started'))