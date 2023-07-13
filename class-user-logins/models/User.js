const {DataTypes}= require('sequelize');
//instance of our database connection
const sequalize = require('../database');

const User = sequalize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
});

module.exports = User;