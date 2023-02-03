const authRoutes = require('./auth.routes')
const productRoutes = require('./product.routes')
const incartRoutes = require('./incart.routes')
const orderRoutes = require('./order.routes')

const routerApi = (app) => {
  app.use('/api/v1/auth', authRoutes)
  app.use('/api/v1/product', productRoutes)
  app.use('/api/v1/incart', incartRoutes)
  app.use('/api/v1/order', orderRoutes)
}

module.exports = routerApi
