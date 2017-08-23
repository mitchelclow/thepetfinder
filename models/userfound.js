module.exports = function(sequelize, Datatypes){
var UserFound = sequelize.define("user_found", {
  dateFound: DataTypes.STRING,
  petGender: DataTypes.STRING,
  typeofAnimal: DataTypes.STRING,
  locationFound: DataTypes.STRING,
  contactName: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  addlInfo: DataTypes.STRING

});
return UserFound;
};
