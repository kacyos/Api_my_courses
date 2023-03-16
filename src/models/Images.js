const { Model, DataTypes } = require("sequelize");

class Images extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        size: DataTypes.NUMBER,
        key: DataTypes.STRING,
        url: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Courses, {
      foreignKey: "course_id",
      as: "course",
    });
  }
}

module.exports = Images;
