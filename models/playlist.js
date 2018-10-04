'use strict';
module.exports = (sequelize, DataTypes) => {
  const playlist = sequelize.define('playlist', {
    rudiment: DataTypes.STRING,
    uuid: DataTypes.STRING,
    hyperlink: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {});
  playlist.associate = function(models) {
    // associations can be defined here
  };
  return playlist;
};