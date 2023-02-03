const { createOrder } = require('../controllers/order.controller')
const { Router } = require('express')

const router = Router()

router.post('/ordercreate', createOrder)

module.exports = router
