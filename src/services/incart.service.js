const models = require('../models')
require('dotenv').config()

class incartService {
  static async getProductCart(productincart) {
    try {
      const result = await models.product_in_cart.create(productincart)
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = incartService
