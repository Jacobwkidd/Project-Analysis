const Sequelize = require('sequelize'); // this is a class

// create a new instance of sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

//test of the connection
sequelize 
    .authenticate()
    .then(() => {
        console.log("Connection established");
    })
    .catch(err => {
        console.log("Error connecting: ", err);
    });

// export the sequalize instance 
module.exports = sequelize;