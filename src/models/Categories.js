const { Model, DataTypes } = require("sequelize");

class Categories extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Courses, { foreignKey: "category_id", as: "courses" });
  }
}

module.exports = Categories;
