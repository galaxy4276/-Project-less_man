const User = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
    },
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
    timestamp: true,
  });
};


export default User;