const { Router } = require('express')
const {
  createProduct,
  getProductsAvailable,
  addProductToCart,
} = require('../controllers/product.controller')

const router = Router()

/**
 * @openapi
 * /api/v1/products/{id}:
 *   post:
 *     security:
 *       - bearerAuth: [ ]
 *     summary: create a new product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: user id
 *     requestBody:
 *       description: Required fields to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/newProduct'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/v1/products/availables:
 *   get:
 *     security:
 *       - bearerAuth: [ ]
 *     summary: get products availables
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Get products available
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example:
 *                     id: 1
 *                     name: TV
 *                     price: 200
 *                     available_qty: 2
 *                     is_available: true
 *                     seller:
 *                       username: Diego
 *       400:
 *         description: Not products availables
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: null
 */

router.post('/:id', createProduct)
router.get('/availables', getProductsAvailable)

module.exports = router
