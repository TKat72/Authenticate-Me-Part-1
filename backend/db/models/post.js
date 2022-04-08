'use strict';
const { Validator } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 50],

      }
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    context: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability: {
      type: DataTypes.INTEGER
    }
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'userId' });
    Post.hasMany(models.Registration, { foreignKey: 'postId' })
  };
  Post.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { userId, title, imgUrl, context, availability } = this; // context will be the User instance
    return { userId, title, imgUrl, context, availability };

  };
  Post.getPostById = async function (id) {
    return await Post.findByPk(id)
  }
  Post.getAllPosts = async function () {
    return await Post.findAll();
  }
  Post.createPost = async function ({ userId, title, imgUrl, context, availability }) {

    return await Post.create({ userId, title, imgUrl, context, availability })
  }


  return Post;
};
