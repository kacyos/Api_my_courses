const { Model, DataTypes } = require("sequelize");

class Courses extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Categories, {
      foreignKey: "category_id",
      as: "category",
    });
    this.hasOne(models.Images, { foreignKey: "course_id", as: "image" });
  }
}

module.exports = Courses;
