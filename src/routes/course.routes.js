const { Router } = require("express");
const CourseController = require("../controller/Course.controller");

const courseRoutes = Router();

courseRoutes.post("/course/:category_id", CourseController.create);
courseRoutes.get("/courses", CourseController.listAll);
courseRoutes.put("/course/:id", CourseController.update);
courseRoutes.delete("/course/:id", CourseController.delete);

module.exports = courseRoutes;
