const Image = require("../models/Images");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

module.exports = {
  async create(req, res) {
    const { course_id } = req.params;
    const baseUri = "http://localhost:5000";
    const {
      originalname: name,
      size,
      key,
      url = `${baseUri}/files/${key}`,
    } = req.file;

    try {
      const imageExists = await Image.findOne({
        where: { course_id },
      });

      if (imageExists) {
        await imageExists.destroy();
        promisify(fs.unlink)(path.resolve("src/uploads", imageExists.key));
      }

      const image = await Image.create({ name, size, key, course_id, url });

      return res.status(201).json({ image });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error.message,
        message: "Falha ao adicionar imagem.",
      });
    }
  },

  async deleteImage(req, res) {
    const { id } = req.params;
    try {
      const image = await Image.findByPk(id);

      await image.destroy();
      promisify(fs.unlink)(path.resolve("src/uploads", image.key));

      return res.status(200).json({ message: "Imagem deletada com sucesso." });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao deletar imagem.",
      });
    }
  },
};
