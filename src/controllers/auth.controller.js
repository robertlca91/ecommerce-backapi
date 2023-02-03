const AuthServices = require('../services/auth.services')
const CarService = require('../services/car.service')
const OrderService = require('../services/order.service')
const transporter = require('../utils/mailer')

const register = async (req, res) => {
  try {
    const user = req.body

    const result = await AuthServices.register(user)
    console.log(result)
    if (result) {
      await CarService.carCreate({ user_id: result.id, total_price: 0 })
      res.status(201).json({ message: 'user created' })
      await transporter.sendMail({
        to: result.email,
        from: 'lucianocentenoavend91@gmail.com',
        subjetc: 'Email confirmation',
        html: "<h1>Bienvenido a la mejor app de chat creada por mi</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>",
      })
    } else {
      res.status(400).json({ message: 'somethign wrong' })
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email) {
      return res.status(400).json({
        error: 'missing data',
        message: 'not email provided',
      })
    }
    if (!password) {
      return res.status(400).json({
        error: 'missing data',
        message: 'not password provided',
      })
    }
    const result = await AuthServices.login({ email, password })
    if (result.isValid) {
      const { username, id, email } = result.user
      const userData = { username, id, email }
      const token = await AuthServices.genToken(userData)
      result.user.token = token
      res.json(result.user)
    } else {
      res.status(400).json({ message: 'user not found' })
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getProductUser = async (req, res) => {
  try {
    const { id } = req.params
    const result = await AuthServices.getProductUser(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const viewOrderUser = async (req, res) => {
  try {
    const { id } = req.params
    const result = await AuthServices.viewOrderUser(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { register, login, getProductUser, viewOrderUser }
