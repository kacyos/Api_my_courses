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
      as: "courses",
    });
  }
}

module.exports = Courses;
