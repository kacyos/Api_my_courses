const express = require("express");
const CategoryRoutes = require("./category.routes");
const CourseRoutes = require("./course.routes");
const imagesRoutes = require("./images.routes");

const routes = express.Router();
routes.use(CategoryRoutes);
routes.use(CourseRoutes);
routes.use(imagesRoutes);

module.exports = routes;
