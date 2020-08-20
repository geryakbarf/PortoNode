const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Kemampuan = sequelize.define('kemampuan', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false
    },
    gambar: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timeStamp: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});

module.exports = Kemampuan;
