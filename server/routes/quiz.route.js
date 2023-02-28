import express from "express";
import { validate } from "express-validation";
import paramValidation from "../../config/param-validation";
import quizCtrl from "../controllers/quiz.controller";

const router = express.Router(); // eslint-disable-line new-cap

router
  .route("/")

  // /** GET /api/users - Get list of users */
  // .get((req, res) => {
  //   res.send("welcome!");
  // })

  /** POST /api/users - Create new user */
  .post(quizCtrl.create);

// router
//   .route("/:id")
router
  .route("/")
  //   /** GET /api/quiz/:id - Get quiz */
  .get(quizCtrl.getbyId);

// /** Load user when API with userId route parameter is hit */
//router.param("id", quizCtrl.load);

export default router;
