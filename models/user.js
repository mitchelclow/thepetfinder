// index.js runs this JavaScript file through Sequelize and exports an object used to interface with Sequelize in other files
// index.js provides vars sequelize and DataTypes
// sequelize is the connection to the db; DataTypes deine what tyhpe of data each propery on our model should be
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User, {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
}
