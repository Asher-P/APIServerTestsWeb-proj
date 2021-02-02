const express = require("express");
const router = express.Router();
const controller = require("../controller/exams");
const asyncHandler = require("../helpers/asyncHandler");

// Get exams from json
router.get(
  "/getexams",
  asyncHandler(async (req, res) => {
    //console.log(controller);
    const data = await controller.getAllExams();

    res.send(data);
  })
);
router.get(
  "/getexambyid/:id",
  asyncHandler(async (req, res) => {
    let id = req.params.id;
    console.log("id",id);
    const data = await controller.getExamById(id);

    res.send(data);
  })
);


// Add Exam to the list in json
router.post(
  "/addexam",
  asyncHandler(async (req, res) => {
      console.log("in post");
      try {
      console.log("req:" ,req.body);
      const data = await controller.addExam(req.body);
      console.log("data:",data);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);




module.exports = router;
