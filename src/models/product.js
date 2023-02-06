const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes)
}
/**
 * @openapi
 * components:
 *   schemas:
 *     newProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: TV
 *         price:
 *           type: int
 *           example: 200
 *         available_qty:
 *           type: int
 *           example: 2
 */

class product extends Sequelize.Model {
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
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        available_qty: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 1,
        },
        isvailable: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        tableName: 'product',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'product_pkey',
            unique: true,
            fields: [{ name: 'id' }],
          },
        ],
      }
    )
  }
}
