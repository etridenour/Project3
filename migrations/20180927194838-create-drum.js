'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('drums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rudiment: {
        type: Sequelize.STRING
      },
      beginner: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      medium: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      advanced: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      hyperlink: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('drums');
  }
};