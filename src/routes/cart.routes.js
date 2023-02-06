const { Router } = require('express')
const { purchased } = require('../controllers/product.controller')

const router = Router()

/**
 * @openapi
 * /api/v1/cart/{id}:
 *   put:
 *     security:
 *       - bearerAuth: [ ]
 *     summary: purchsed
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: cart id
 *     responses:
 *       200:
 *         description: Purchased
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example:
 *                     Purchased ok
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

router.put('/:id', purchased)

module.exports = router
