const bcrypt = require('bcrypt')
const models = require('../models/index')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AuthServices {
  static async register(user) {
    try {
      const result = await models.user.create(user)
      return result
    } catch (error) {
      throw error
    }
  }
  static async login(credentials) {
    try {
      const { email, password } = credentials
      const user = await models.user.findOne({ where: { email } })
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password)
        return isValid ? { isValid, user } : { isValid }
      }
      return { isValid: false }
    } catch (error) {
      throw error
    }
  }
  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '10m',
        algorithm: 'HS512',
      })
      return token
    } catch (error) {
      throw error
    }
  }
  static async getProductUser(id) {
    try {
      const result = await models.user.findOne({
        where: { id },
        include: {
          model: models.car,
          as: 'cars',
          include: {
            model: models.product_in_cart,
            as: 'product_in_carts',
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
  static async viewOrderUser(id) {
    try {
      const result = await models.user.findAll({
        where: { id },
        include: {
          model: models.order,
          as: 'orders',
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = AuthServices
