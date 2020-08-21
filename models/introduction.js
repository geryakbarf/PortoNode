const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Introduction = sequelize.define('introduction', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    intro: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timeStamp: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});

module.exports = Introduction;
