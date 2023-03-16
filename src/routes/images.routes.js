const { Router } = require("express");
const multer = require("multer");
const ImageController = require("../controller/Image.controller");
const multerConfig = require("../services/multer");

const upload = multer(multerConfig);
const imagesRoutes = Router();

imagesRoutes.post(
  "/image/:course_id",
  upload.single("file"),
  ImageController.create
);

imagesRoutes.delete("/image/:id", ImageController.deleteImage);

module.exports = imagesRoutes;
