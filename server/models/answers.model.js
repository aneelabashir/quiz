import { DataTypes } from "sequelize";

/**
 * Questions Schema
 */
export default {
  name: "Answer",
  attribute: {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    questionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "questionID cannot be empty",
        },
      },
    },
  },
};
