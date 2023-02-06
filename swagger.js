const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()

const options = {
  apis: [
    './src/routes/auth.routes.js',
    './src/models/user.js',
    './src/routes/product.routes.js',
    './src/models/product.js',
    './src/routes/ProductInCart.routes.js',
    './src/models/product_in_cart.js',
    './src/routes/order.routes.js',
    './src/routes/cart.routes.js',
  ],
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce node js',
      version: '0.0.9',
      description: 'API para compra y venta de productos',
    },
  },
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('api/v1/docs.json', (req, res) => {
    res.setHeader({ 'Content-Type': 'application/json' })
    res.send(swaggerSpec)
  })
  console.log(
    `la documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`
  )
}

module.exports = swaggerDocs

module.exports = swaggerDocs
