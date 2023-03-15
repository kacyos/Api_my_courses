const Sequelize = require("sequelize");
const Categories = require("../models/Categories");
const Courses = require("../models/Courses");
const databaseConfig = require("./config/database.config");

const connection = new Sequelize(databaseConfig);

Courses.init(connection);
Categories.init(connection);

Categories.associate(connection.models);
Courses.associate(connection.models);

module.exports = connection;
