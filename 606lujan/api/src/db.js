require("dotenv").config();
const { Sequelize } = require("sequelize");
const { ENVIROMENT, DB_DEPLOY, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

let sequelize;
if (ENVIROMENT === "local") {
  sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/scout`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );
}
if (ENVIROMENT === "deploy") {
  sequelize = new Sequelize(DB_DEPLOY, {
    logging: false,
    native: false,
  });
}

module.exports = {
  //...sequelize.models, // para poder importar los modelos así: const { Product, User, Comment } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
