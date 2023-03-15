const { Router } = require("express");
const CategoryController = require("../controller/Category.controller");

const categoryRoutes = Router();

categoryRoutes.post("/category", CategoryController.create);
categoryRoutes.get("/category", CategoryController.list);

module.exports = categoryRoutes;
