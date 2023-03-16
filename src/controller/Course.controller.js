const Course = require("../models/Courses");

module.exports = {
  async create(req, res) {
    const { name, description } = req.body;
    const { category_id } = req.params;

    try {
      if (!name) {
        return res.status(400).json({
          message: "Nome do curso não pode ser vazio.",
        });
      }

      const courseExists = await Course.findOne({
        where: { name, category_id },
      });

      if (courseExists) {
        return res.status(409).json({
          message: "Curso já cadastrado nesta categoria.",
        });
      }

      const course = await Course.create({ name, description, category_id });

      return res
        .status(201)
        .json({ message: "Curso adicionado com sucesso.", id: course.id });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao adicionar curso.",
      });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, description, category_id } = req.body;

    try {
      if (!name) {
        return res.status(400).json({
          message: "Nome do curso não pode ser vazio.",
        });
      }

      const course = await Course.findByPk(id);

      if (!course) {
        return res.status(404).json({
          message: "Curso não encontrado.",
        });
      }

      await course.update({ name, description, category_id });

      return res.status(201).json({ message: "Curso atualizado com sucesso." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error.message,
        message: "Falha ao atualizar curso.",
      });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const course = await Course.findByPk(id);

      if (!course) {
        return res.status(404).json({
          message: "Curso não encontrado.",
        });
      }

      await course.destroy();

      return res.status(200).json({ message: "Curso deletado com sucesso." });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao deletar curso.",
      });
    }
  },

  async listAll(req, res) {
    try {
      const courses = await Course.findAll({
        include: { association: "image", attributes: ["id", "url"] },
        order: [
          ["created_at", "DESC"],
          ["updated_at", "DESC"],
        ],
      });

      return res.json(courses);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao listar categorias.",
      });
    }
  },

  async filterByCategory(req, res) {
    const { category_id } = req.params;

    try {
      const courses = await Category.find({
        where: { category_id },
      });

      return res.json(courses);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: "Falha ao listar categorias.",
      });
    }
  },
};
