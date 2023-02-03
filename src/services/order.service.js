const models = require('../models')
require('dotenv').config()
class OrderService {
  static async createOrder(order) {
    try {
      const result = await models.order.create(order)
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = OrderService
