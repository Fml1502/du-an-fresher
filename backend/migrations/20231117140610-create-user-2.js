"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User2s", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameUser: {
        type: Sequelize.STRING,
      },
      passWord: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      admin: {
        type: Sequelize.TINYINT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User2s");
  },
};
