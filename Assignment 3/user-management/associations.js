const sequelize = require('./database');
const User = require('./models/User');
const Role = require('./models/Role');

// TODO: Define associations here
User.belongsTo(Role);
Role.hasMany(User);

//Sync all models
sequelize.sync();