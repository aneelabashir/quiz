import httpStatus from "http-status";
import db from "../../config/sequelize";

const { Quiz, Question } = db;

/**
 * Load user and append to req.
 */
const getbyId = async (req, res) => {
  try {
    const id = req?.query?.id;
    const quiz = await Quiz.findOne({
      attributes: ["id", "title", "description"],
      where: {
        id: id,
      },

      include: [
        {
          model: Question,
          attributes: ["title", "answer1", "answer2", "answer3", "isMandatory"],
        },
      ],
    });
    if (quiz) {
      res.json({
        message: "Quiz Found Successfully!.",
        success: true,
        error: null,
        data: quiz,
      });
    } else {
      throw Error();
    }
  } catch (error) {
    res.json({
      message: "Quiz does not exist!.",
      success: false,
      error: error,
      data: null,
    });
  }
};

/**
 * Get quiz
 */
function get(req, res) {
  return res.json(req.user);
}

/**
 * Create new Quiz
 */
const create = async (req, res, next) => {
  try {
    const body = req.body;
    const quiz = await Quiz.create(
      {
        title: body.title,
        description: body.description,
        Questions: body.questions,
      },
      {
        include: [Question],
      }
    );
    res.json({
      message: "Quiz Added Successfully!.",
      success: true,
      error: null,
      data: quiz,
    });
  } catch (error) {
    res.json({
      message: "Error while adding quiz!.",
      success: false,
      error: error,
      data: null,
    });
  }
};

export default {
  get,
  create,
  getbyId,
};
