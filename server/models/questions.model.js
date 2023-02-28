import { DataTypes } from "sequelize";

/**
 * Questions Schema
 */
export default {
  name: "Question",
  attribute: {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    quizID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "quizID cannot be empty",
        },
      },
    },
  },
};
