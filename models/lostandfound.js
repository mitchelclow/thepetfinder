module.exports = function(sequelize, Datatypes){
var Userlost = sequelize.define("Userlost", {
  dateMissing: DataTypes.string,
  petName: DataTypes.string,
  petGender: DataTypes.string,
  typeofAnimal: DataTypes.string,
  locationLost: DataTypes.string,
  ownerName: DataTypes.string,
  phone: DataTypes.string,
  email: DataTypes.string,
  addlInfo: DataTypes.string,

});
return.Userlost;
}
