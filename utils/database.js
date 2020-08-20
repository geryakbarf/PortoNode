const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_portofolio', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;
