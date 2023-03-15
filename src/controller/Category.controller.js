const Category = require("../models/Categories");

module.exports = {
  async create(req, res) {
    const { name } = req.body;

    try {
      const category = await Category.create({ name });

      return res.json(category);
    } catch (error) {
      return res.status(400).json({
        error: "Falha ao criar nova categoria.",
        message: error.message,
      });
    }
  },
};
