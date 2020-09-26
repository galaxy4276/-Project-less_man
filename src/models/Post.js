const Post = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(450),
      allowNull: false,
    },
  }, {
    timestamp: true,
  });
};


export default Post;