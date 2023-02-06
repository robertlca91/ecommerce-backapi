const AuthServices = require('../services/auth.services')
const CartService = require('../services/car.service')
const transporter = require('../utils/mailer')

const register = async (req, res) => {
  try {
    const user = req.body
    const result = await AuthServices.register(user)

    if (result) {
      // const user_id = result.id
      const newCart = { user_id: result.id }
      await CartService.createdCart(newCart)
      res.status(201).json({ message: 'user created' })
      await transporter.sendMail({
        to: result.email,
        from: 'diegogaraycullas@gmail.com',
        subject: 'Email confirmation',
        html: "<h1>Bienvenido a la mejor app de chat creada por mi</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>",
      })
    } else {
      res.status(400).json({ message: 'something wrong' })
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email) {
      return res.status(400).json({
        error: 'Missing data',
        message: 'Not email provided',
      })
    }
    if (!password) {
      return res.status(400).json({
        error: 'Missing data',
        message: 'Not password provided',
      })
    }
    const result = await AuthServices.login({ email, password })

    if (result.isValid) {
      const { username, id, email } = result.user
      const userData = { id, username, email }
      const token = AuthServices.genToken(userData)
      userData.token = token
      res.json(userData)
    } else {
      res.jsopn(400).json({ message: 'User not found' })
    }
  } catch (error) {
    res.status(400).json({ message: 'Something wrong' })
  }
}

module.exports = { register, login }
