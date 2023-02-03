const OrderService = require('../services/order.service')

const createOrder = async (req, res) => {
  try {
    const order = req.body
    const result = await OrderService.createOrder(order)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { createOrder }
