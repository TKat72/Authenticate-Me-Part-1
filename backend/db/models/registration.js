'use strict';
const { Validator } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 265],
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Registration.associate = function (models) {
    // associations can be defined here
    Registration.belongsTo(models.User, { foreignKey: 'userId' });
    Registration.belongsTo(models.Post, { foreignKey: 'postId' });

  };
  Registration.getRegistrationById = async function (id) {
    return await Registration.findByPk(id)
  }
  Registration.getAllRegistrations = async function () {
    return await Registration.findAll();
  }
  Registration.createRegistration = async function ({ userId, postId, name, email, phone }) {
    return await Registration.create({ userId, postId, name, email, phone })
  }
  Registration.deleteRegistration = async function (id) {
    const result = await Registration.findByPk(id)
    return await result.destroy();
  }
  Registration.updateRegistration = async function ({ id, name, email, phone }) {
    const result = Registration.findByPk(id)
    console.log("in update ", result);
    const finalResult = await result.update({ name, email, phone })
    return finalResult;
  }
  return Registration;
};
