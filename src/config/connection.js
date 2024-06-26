const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
    logging: false,
    pool: {
        max: 10, 
        min: 0,  
        acquire: 30000, 
        idle: 10000 
    }
});

module.exports = db;