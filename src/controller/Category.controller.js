const Category = require("../models/Categories");

module.exports = {
  async create(req, res) {
    const { name } = req.body;

    try {
      const category = await Category.create({ name });

      return res.json(category);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao criar nova categoria.",
      });
    }
  },

  async list(req, res) {
    try {
      const categories = await Category.findAll();

      return res.json(categories);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao listar categorias.",
      });
    }
  },
};
