const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Identity = sequelize.define('identitas', {
    nama: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    ttl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timeStamp: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});

module.exports = Identity;
