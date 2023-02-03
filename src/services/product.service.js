const { user } = require('../models/index')
const models = require('../models/index')
require('dotenv').config()

class ProductService {
  static async createProduct(newproduct) {
    try {
      const result = await models.product.create(newproduct)
      return result
    } catch (error) {
      throw error``
    }
  }
  static async getAllProducts() {
    try {
      const result = await models.product.findAll({
        include: {
          attributes: ['username'],
          model: user,
          as: 'user',
        },
      })
      const result2 = result.filter((item) => item.available_qty > 0)
      return result2
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductService
