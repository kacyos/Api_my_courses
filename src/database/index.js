const Sequelize = require("sequelize");
const Categories = require("../models/Categories");
const Courses = require("../models/Courses");
const Images = require("../models/Images");
const databaseConfig = require("./config/database.config");

const connection = new Sequelize(databaseConfig);

Courses.init(connection);
Categories.init(connection);
Images.init(connection);

Categories.associate(connection.models);
Courses.associate(connection.models);
Images.associate(connection.models);

module.exports = connection;
