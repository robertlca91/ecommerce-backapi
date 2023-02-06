const models = require('../models/index')

class CartService {
  static async addProductToCart(newProductInCart, id) {
    try {
      console.log(newProductInCart)
      const car = await models.car.findOne({ where: { user_id: id } })
      newProductInCart.cart_id = car?.dataValues.id

      const { product_id, quantity } = newProductInCart
      const product = await models.product.findOne({
        where: { id: product_id },
      })
      const productTotalPrice = product?.dataValues.price * quantity
      newProductInCart.price = productTotalPrice

      const newTotalPrice1 = car?.dataValues.total_price + productTotalPrice
      await models.car.update(
        { total_price: newTotalPrice1 },
        {
          where: { id: car?.dataValues.id },
        }
      )

      const result = await models.product_in_cart.create(newProductInCart)
      return result
    } catch (error) {
      throw error
    }
  }

  static async createdCart(newCart) {
    try {
      const result = await models.car.create(newCart)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getProductsInCart(id) {
    try {
      const result = await models.user.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
        include: {
          model: models.car,
          attributes: { exclude: ['user_id'] },
          as: 'carts',
          include: {
            model: models.product_in_cart,
            attributes: { exclude: ['cart_id', 'product_id'] },
            as: 'products_in_carts',
            include: {
              model: models.product,
              as: 'product',
            },
          },
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CartService
