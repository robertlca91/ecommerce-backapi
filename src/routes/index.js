const authRoutes = require('./auth.routes')
const productsRoutes = require('./product.routes')
const productsInCartRoutes = require('./ProductInCart.routes')
const ordersRoutes = require('./order.routes')
const cartRoutes = require('./cart.routes')

const routerApi = (app) => {
  app.use('/api/v1/auth', authRoutes)
  app.use('/api/v1/products', productsRoutes)
  app.use('/api/v1/productsincart', productsInCartRoutes)
  app.use('/api/v1/orders', ordersRoutes)
  app.use('/api/v1/cart', cartRoutes)
}

module.exports = routerApi
