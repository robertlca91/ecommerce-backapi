const CarService = require('../services/car.service')
const incartService = require('../services/incart.service')

const getProductCart = async (req, res) => {
  try {
    const productincart = req.body
    const result = await incartService.getProductCart(productincart)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const buyProduct = async (req, res) => {
  try {
    const { id } = req.params
    const result = await CarService.buyProduct(id)
    if (result) {
      return result.map(product)
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { getProductCart }
