module.exports = function(sequelize, DataTypes){
var UserLost = sequelize.define("user_lost", {
  photolost: DataTypes.STRING,
  dateMissing: DataTypes.STRING,
  petName: DataTypes.STRING,
  petGender: DataTypes.STRING,
  typeofAnimal: DataTypes.STRING,
  locationLost: DataTypes.STRING,
  ownerName: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  addlInfo: DataTypes.STRING

});
return UserLost;
};
