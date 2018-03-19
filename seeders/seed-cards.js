'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards', [

      { color: "red", value: 0, plus: 0, location: "deck" },
      { color: "red", value: 1, plus: 0, location: "deck" },
      { color: "red", value: 2, plus: 0, location: "deck" },
      { color: "red", value: 3, plus: 0, location: "deck" },
      { color: "red", value: 4, plus: 0, location: "deck" },
      { color: "red", value: 5, plus: 0, location: "deck" },
      { color: "red", value: 6, plus: 0, location: "deck" },
      { color: "red", value: 7, plus: 0, location: "deck" },
      { color: "red", value: 8, plus: 0, location: "deck" },
      { color: "red", value: 9, plus: 0, location: "deck" },
      { color: "red", value: null, plus: 2, location: "deck" },

      { color: "yellow", value: 0, plus: 0, location: "deck" },
      { color: "yellow", value: 1, plus: 0, location: "deck" },
      { color: "yellow", value: 2, plus: 0, location: "deck" },
      { color: "yellow", value: 3, plus: 0, location: "deck" },
      { color: "yellow", value: 4, plus: 0, location: "deck" },
      { color: "yellow", value: 5, plus: 0, location: "deck" },
      { color: "yellow", value: 6, plus: 0, location: "deck" },
      { color: "yellow", value: 7, plus: 0, location: "deck" },
      { color: "yellow", value: 8, plus: 0, location: "deck" },
      { color: "yellow", value: 9, plus: 0, location: "deck" },
      { color: "yellow", value: null, plus: 2, location: "deck" },

      { color: "green", value: 0, plus: 0, location: "deck" },
      { color: "green", value: 1, plus: 0, location: "deck" },
      { color: "green", value: 2, plus: 0, location: "deck" },
      { color: "green", value: 3, plus: 0, location: "deck" },
      { color: "green", value: 4, plus: 0, location: "deck" },
      { color: "green", value: 5, plus: 0, location: "deck" },
      { color: "green", value: 6, plus: 0, location: "deck" },
      { color: "green", value: 7, plus: 0, location: "deck" },
      { color: "green", value: 8, plus: 0, location: "deck" },
      { color: "green", value: 9, plus: 0, location: "deck" },
      { color: "green", value: null, plus: 2, location: "deck" },

      { color: "blue", value: 0, plus: 0, location: "deck" },
      { color: "blue", value: 1, plus: 0, location: "deck" },
      { color: "blue", value: 2, plus: 0, location: "deck" },
      { color: "blue", value: 3, plus: 0, location: "deck" },
      { color: "blue", value: 4, plus: 0, location: "deck" },
      { color: "blue", value: 5, plus: 0, location: "deck" },
      { color: "blue", value: 6, plus: 0, location: "deck" },
      { color: "blue", value: 7, plus: 0, location: "deck" },
      { color: "blue", value: 8, plus: 0, location: "deck" },
      { color: "blue", value: 9, plus: 0, location: "deck" },
      { color: "blue", value: null, plus: 2, location: "deck" },

      { color: "black", value: null, plus: 0, location: "deck" },
      { color: "black", value: null, plus: 0, location: "deck" },
      { color: "black", value: null, plus: 4, location: "deck" },
      { color: "black", value: null, plus: 4, location: "deck" },

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', null, {});
  }
};
