const models = require('../models')

class CarService {
  static async carCreate(car) {
    try {
      const result = await models.car.create(car)
      console.log(result)
      return result
    } catch (error) {
      throw error
    }
  }
  static async buyProduct(id) {
    try {
      const result = await models.car.findOne({ where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CarService
