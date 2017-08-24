module.exports = function(sequelize, DataTypes){
var UserLost = sequelize.define("user_lost", {
  namelost: DataTypes.STRING,
  petName: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  petGender: DataTypes.STRING,
  lastseenAddress: DataTypes.STRING,
  typeofAnimal: DataTypes.STRING,
  dateLost: DataTypes.STRING,
  genderLost: DataTypes.STRING,
  addlInfo: DataTypes.STRING

});
return UserLost;
};
