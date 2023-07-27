const {DataTypes}= require('sequelize');
//instance of our database connection
const sequalize = require('../database');


const Role = sequalize.define('Role', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
});

module.exports = Role;