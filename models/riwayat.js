const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Riwayat = sequelize.define('riwayat', {
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
    instansi: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tanggal_mulai: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    tanggal_selesai: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    tipe: {
        type: Sequelize.ENUM,
        values: ['Sekolah', 'Perusahaan'],
        allowNull: false
    },
}, {
    timeStamp: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});

module.exports = Riwayat;
