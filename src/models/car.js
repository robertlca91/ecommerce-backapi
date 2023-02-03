const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  return car.init(sequelize, DataTypes)
}
/**
 * @openapi
 * components:
 *   schemas:
 *     newConversation:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: conversations
 *         created_by:
 *           type: int
 *           example: 1
 *         user_id:
 *           type: int
 *           example: 2
 */

class car extends Sequelize.Model {
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
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id',
          },
        },
        total_price: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'car',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'car_pkey',
            unique: true,
            fields: [{ name: 'id' }],
          },
        ],
      }
    )
  }
}
