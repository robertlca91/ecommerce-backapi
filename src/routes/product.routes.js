const {
  createProduct,
  getAllProducts,
} = require('../controllers/product.controller')
const { Router } = require('express')

const router = Router()

router.post('/product', createProduct)
router.get('/products', getAllProducts)

module.exports = router
