import { Model } from 'sequelize';
import { DataTypes } from 'sequelize';


export default class Post extends Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(450),
        allowNull: true,
      },
    }, {
      modelName: 'Post',
      tableName: 'posts',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      sequelize,
    })
  }

  static associate(db) {
    db.Post.belongsTo(db.User);
  }
}
