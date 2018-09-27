'use strict';
module.exports = (sequelize, DataTypes) => {
  const drum = sequelize.define('drum', {
    rudiment: DataTypes.STRING,
    beginner: DataTypes.INTEGER,
    medium: DataTypes.INTEGER,
    advanced: DataTypes.INTEGER,
    hyperlink: DataTypes.STRING
  }, {});
  drum.associate = function(models) {
    // associations can be defined here
  };
  return drum;
};