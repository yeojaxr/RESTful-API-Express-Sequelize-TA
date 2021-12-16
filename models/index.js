const Sequelize = require("sequelize");
const sequelize = new Sequelize("db_restful", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Hewan = require("./hewan.model.js")(sequelize, Sequelize);

module.exports = db;