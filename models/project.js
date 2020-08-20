const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Project = sequelize.define('project', {
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
    detail: {
        type: Sequelize.TEXT,
        allowNull: false,
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

module.exports = Project;
