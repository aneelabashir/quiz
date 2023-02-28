import express from "express";

import quizRoutes from "./quiz.route";
const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

router.use("/quiz", quizRoutes);

export default router;
