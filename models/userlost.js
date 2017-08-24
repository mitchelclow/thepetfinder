module.exports = function(sequelize, DataTypes){
var UserLost = sequelize.define("user_lost", {
  namelost: DataTypes.STRING,
  petName: DataTypes.STRING,
  emaillost: DataTypes.STRING,
  phonelost: DataTypes.STRING,
  lastseenAddress: DataTypes.STRING,
  typeofAnimal: DataTypes.STRING,
  dateLost: DataTypes.STRING,
  genderLost: DataTypes.STRING,
  addlInfolost: DataTypes.STRING

});
return UserLost;
};
