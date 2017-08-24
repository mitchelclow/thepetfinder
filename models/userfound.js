module.exports = function(sequelize, DataTypes){
var UserFound = sequelize.define("user_found", {
  foundName: DataTypes.STRING,
  emailfound: DataTypes.STRING,
  phoneFound: DataTypes.STRING,
  addressFound: DataTypes.STRING,
  typeofAnimal: DataTypes.STRING,
  dateFound: DataTypes.STRING,
  genderFound: DataTypes.STRING,
  addlInfofound: DataTypes.STRING,
  photoFound: DataTypes.STRING

});
return UserFound;
};
