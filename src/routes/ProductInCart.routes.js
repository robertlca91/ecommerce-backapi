const { Router } = require('express')
const { getProductsInCart } = require('../controllers/cart.controller')
const { addProductToCart } = require('../controllers/product.controller')

const router = Router()

/**
 * @openapi
 * /api/v1/productsincart/add/{id}:
 *   post:
 *     security:
 *       - bearerAuth: [ ]
 *     summary: add product to cart
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: user id
 *     requestBody:
 *       description: Required user id to add product to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addProductInCart'
 *     responses:
 *       200:
 *         description: Add product to cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example:
 *                     cart_id: 2
 *                     product_id: 3
 *                     quantity: 1
 *                     price: 2000
 *
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
 * /api/v1/productsincart/{id}:
 *   get:
 *     security:
 *       - bearerAuth: [ ]
 *     summary: get products in cart
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: user id
 *     responses:
 *       200:
 *         description: get products in cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example:
 *                     id: 2
 *                     username: Diego
 *                     email: diego@gmail.com
 *                     carts:
 *                       id: 1
 *                       total_price: 4000
 *                       products_in_carts:
 *                         id: 1
 *                         quantity: 2
 *                         price: 4000
 *                         purchase_completed: false,
 *                         product:
 *                           id: 1
 *                           name: TV
 *                           price: 2000
 *                           available_qty: 7
 *                           is_available: true
 *                           seller_id: 1
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
 */

router.post('/add/:id', addProductToCart)
router.get('/:id', getProductsInCart)

module.exports = router
