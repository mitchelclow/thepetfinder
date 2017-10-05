// index.js runs this JavaScript file through Sequelize and exports an object used to interface with Sequelize in other files
// index.js provides vars sequelize and DataTypes
// sequelize is the connection to the db; DataTypes define what type of data each propery on our model should be
// Using the sequelize.define method and passing to arguments: the name of the model as a string, and an object with model's schema
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Datatypes.INTEGER
    },
    firstname: {
      type: Datatypes.STRING,
      notEmpty: true
    },
    lastname: {
      type: Datatypes.STRING,
      notEmpty: true
    },
    username: {
      type: Datatypes.TEXT,
    },
    about: {
      type: Datatypes.TEXT,
    },
    email: {
      type: Datatypes.TEXT,
      validate: {
        isEmail: true
      },
   password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: {
      type: Datatypes.DATE
    },
    status: {
      type: Datatypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
});
  return User;
};
