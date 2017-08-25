module.exports = function(sequelize, DataTypes){
var UserFound = sequelize.define("user_found", {
  foundName: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  emailfound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  phoneFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  addressFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  typeofAnimal: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  dateFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  genderFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  addlInfofound: {
    type: DataTypes.STRING
  }
});

return UserFound;
};
