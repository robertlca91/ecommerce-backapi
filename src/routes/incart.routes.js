const { Router } = require('express')

const router = Router()

const { getProductCart } = require('../controllers/incart.controller')

router.post('/incart', getProductCart)

module.exports = router
