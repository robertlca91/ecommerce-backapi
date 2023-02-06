const { register, login } = require('../controllers/auth.controller')
const { Router } = require('express')

const router = Router()

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: create a new user into application
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
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
 *                   example: user created
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
 * /api/v1/auth/login:
 *   post:
 *     summary: user logged into the application
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to logged user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: Loggin
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/loginResponse'
 *       401:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: unauthorized
 */

router.post('/register', register)
router.post('/login', login)

module.exports = router
