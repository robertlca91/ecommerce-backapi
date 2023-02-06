const CartService = require('../services/car.service')
const ProductsServices = require('../services/product.service')

const createProduct = async (req, res) => {
  try {
    const { id } = req.params
    const user_id = id
    const { name, price, available_qty } = req.body
    if (!name || !price || !available_qty || !user_id) {
      return res.status(400).json({ message: 'Missing require fields' })
    }
    const newProduct = { name, price, available_qty, user_id }
    await ProductsServices.createProduct(newProduct)
    res.status(201).json({ message: 'products created' })
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getProductsAvailable = async (req, res) => {
  try {
    const result = await ProductsServices.getProductsAvailable()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const addProductToCart = async (req, res) => {
  try {
    const { id } = req.params
    const newProductInCart = req.body

    // const { cart_id, product_id, quantity, price,purchase_completed } = req.body;

    // const newProductInCart = { cart_id, product_id, quantity, price,purchase_completed }

    const result = await CartService.addProductToCart(newProductInCart, id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const purchased = async (req, res) => {
  try {
    const { id } = req.params
    const result = await ProductsServices.purchased(id)
    res.json({ message: 'Purchased ok' })
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  createProduct,
  getProductsAvailable,
  addProductToCart,
  purchased,
}
