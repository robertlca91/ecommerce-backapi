const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  return user.init(sequelize, DataTypes)
}
/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: luciano
 *         email:
 *           type: string
 *           example: robert_lca91@homail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: ian.rosas@academlo.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string,
 *           example: luciano
 *         id:
 *           type: int
 *           example: 2
 *         email:
 *           type: string
 *           example: robert_lca91@hotmail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJ0cmF2ZXN0aWRpZWdvIiwibGFzdG5hbWUiOiJsb2NhcGF1bCIsImlkIjozLCJlbWFpbCI6ImRpZWd1aXRvQGdtYWlsLmNvbSIsImlhdCI6MTY3NDg2MjE0OCwiZXhwIjoxNjc0ODYyNzQ4fQ.AMsqYOxB5ExrJSBD-6bob9vj0kLBZD4xZutxTfgC2ZszTCN8v9pc7yC04KytGAyOV9NcDJy2DerZ7CSiMImM5A
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
class user extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: 'user_email_key',
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        hooks: {
          beforeCreate: (user, options) => {
            const { password } = user
            const hash = bcrypt.hashSync(password, 10)
            user.password = hash
          },
        },
        sequelize,
        tableName: 'user',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'user_email_key',
            unique: true,
            fields: [{ name: 'email' }],
          },
          {
            name: 'user_pkey',
            unique: true,
            fields: [{ name: 'id' }],
          },
        ],
      }
    )
  }
}
