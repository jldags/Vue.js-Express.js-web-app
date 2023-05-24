'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users_Machines', {
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false
      },
      MachineInventoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MachineInventories',
          key: 'id'
        },
        allowNull: false,
      }
    });

    await queryInterface.addConstraint('Users_Machines', {
      type: 'primary key',
      fields: ['UserId', 'MachineInventoryId'],
      name: 'Users_Machines_pkey'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Users_Machines', 'Users_Machines_pkey');
    await queryInterface.dropTable('Users_Machines');
  }
};