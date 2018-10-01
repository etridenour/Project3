'use strict';
module.exports = (sequelize, DataTypes) => {
  const exercises = sequelize.define('exercises', {
    exercise: DataTypes.STRING,
    hyperlink: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {});
  exercises.associate = function(models) {
    // associations can be defined here
  };
  return exercises;
};