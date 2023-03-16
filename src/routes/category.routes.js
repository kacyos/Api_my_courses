const { Router } = require("express");
const CategoryController = require("../controller/Category.controller");

const categoryRoutes = Router();

categoryRoutes.post("/category", CategoryController.create);
categoryRoutes.get("/category", CategoryController.list);
categoryRoutes.put("/category/:id", CategoryController.update);
categoryRoutes.delete("/category/:id", CategoryController.delete);

module.exports = categoryRoutes;
