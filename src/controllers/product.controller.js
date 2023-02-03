const ProductService = require('../services/product.service')

const createProduct = async (req, res) => {
  try {
    const newproduct = req.body
    const result = await ProductService.createProduct(newproduct)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getAllProducts = async (req,res)=>{
try {
  const result = await ProductService.getAllProducts()
  res.json(result)
} catch (error) {
  res.status(400).json(error.message)
}
}

module.exports = { createProduct, getAllProducts }
