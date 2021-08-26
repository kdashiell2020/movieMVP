'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('cocktails', {
      drink_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drink_name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      glass_type: {
        type: Sequelize.STRING
      },
      instructions: {
        type: Sequelize.STRING
      },
      thumbnail_img: {
        type: Sequelize.TEXT
      },
      ingredients: {
        type: Sequelize.ENUM,
        values: ['Injesting', 'Uploaded', 'Processing', 'Transcoded', 'Failed']
      },
      source_ig: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};