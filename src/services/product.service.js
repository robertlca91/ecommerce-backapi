const models = require('../models/index')

class ProductsServices {
  static async createProduct(newProduct) {
    try {
      const result = await models.product.create(newProduct)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getProductsAvailable() {
    try {
      const result = await models.product.findAll({
        where: { isvailable: true },
        attributes: { exclude: ['user_id'] },
        include: {
          model: models.user,
          as: 'user',
          attributes: ['username'],
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async addProductToCart(newProductInCart) {
    try {
      const result = await models.product_in_order.create(newProductInCart)
      return result
    } catch (error) {
      throw error
    }
  }

  static async purchased(id) {
    try {
      const result = await models.product_in_cart.update(
        { purchase_completed: true },
        {
          where: { cart_id: id },
        }
      )
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductsServices
