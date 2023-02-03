const db = require('../utils/database')
const initModels = require('./init-models')

const models = initModels(db)

const { user, product, product_in_order, product_in_cart, order, car } = models
// db.authenticate()
//   .then(() => console.log('base de datos autenticada'))
//   .catch((error) => console.log(error))

// db.sync({ force: false })
//   .then(() => console.log('Base de datos sincronizada'))
//   .catch((error) => console.log(error))

module.exports = models
