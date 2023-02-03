const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const routerApi = require('./routes')

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

routerApi(app)

// db.authenticate()
//   .then(() => console.log('base de datos autenticada'))
//   .catch((error) => console.log(error))

// db.sync({ force: false })
//   .then(() => console.log('Base de datos sincronizada'))
//   .catch((error) => console.log(error))

// app.get('/', (req, res) => {
//   res.json({ message: 'welcome to my server' })
// })
// app.use('/api/v1/auth', authRoutes)

module.exports = app
