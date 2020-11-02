import { Model } from 'sequelize';
import { DataTypes } from 'sequelize';


export default class User extends Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: 'username',
      },
      password: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: 'password',
      },
    }, {
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      sequelize,
    })
  }

  static associate(db) {
    db.User.hasMany(db.Post);
  }
}