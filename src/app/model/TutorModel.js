const { DataTypes, Model } = require('sequelize');
const db = require('../../db/connection');

class Tutor extends Model {}

Tutor.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: 'Tutor',
    tableName: 'tutors',
    timestamps: true, 
    underscored: true, 
});

module.exports = Tutor;

