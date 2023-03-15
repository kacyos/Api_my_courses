const express = require("express");
const CategoryRoutes = require("./category.routes");

const routes = express.Router();
routes.use(CategoryRoutes);

module.exports = routes;
