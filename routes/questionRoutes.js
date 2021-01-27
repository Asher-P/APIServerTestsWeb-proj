const express = require("express");
const router = express.Router();
const controller = require("../controller/questions");
const asyncHandler = require("../helpers/asyncHandler");

// Get questions from json
router.get(
  "/getQuestions",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllQuestions();
    res.send(data);
  })
);

router.get(
  "/getquestionbyid/:id",
  asyncHandler(async (req, res) => {
    let id = req.params.id;
    const data = await controller.getQuestionById(id);

    res.send(data);
  })
);

// Add question to the list in json
router.post(
  "/addQuestion",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addQuestion(req.body);
      console.log(data);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

module.exports = router;
