const OrderService = require('../services/order.service')

const getOrderWithUserId = async (req, res) => {
  try {
    const { id } = req.params
    const result = await OrderService.getOrderWithUserId(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { getOrderWithUserId }
