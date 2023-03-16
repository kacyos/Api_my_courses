const Category = require("../models/Categories");

module.exports = {
  async create(req, res) {
    const { name } = req.body;

    try {
      if (!name) {
        return res.status(400).json({
          message: "Nome da categoria não pode ser vazio.",
        });
      }

      const categoryExists = await Category.findOne({ where: { name } });

      if (categoryExists) {
        return res.status(409).json({
          message: "Categoria já existe.",
        });
      }

      await Category.create({ name });

      return res.status(201).json({ message: "Categoria criada com sucesso." });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao criar nova categoria.",
      });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      if (!name) {
        return res.status(400).json({
          message: "Nome da categoria não pode ser vazio.",
        });
      }

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({
          message: "Categoria não encontrada.",
        });
      }

      await category.update({ name });

      return res
        .status(201)
        .json({ message: "Categoria atualizada com sucesso." });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao atualizar categoria.",
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

  async delete(req, res) {
    const { id } = req.params;

    try {
      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({
          message: "Categoria não encontrada.",
        });
      }

      await category.destroy();

      return res
        .status(200)
        .json({ message: "Categoria deletada com sucesso." });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao deletar categoria.",
      });
    }
  },
};
