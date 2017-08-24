module.exports = function(sequelize, DataTypes){
var UserFound = sequelize.define("user_found", {
  foundName: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  addressFound: DataTypes.STRING,
  typeofAnimal: DataTypes.STRING,
  dateFound: DataTypes.STRING,
  genderFound: DataTypes.STRING,
  addlInfo: DataTypes.STRING,
  photoFound: DataTypes.STRING

});
return UserFound;
};
