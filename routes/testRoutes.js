const express = require("express");
const router = express.Router();
const controller = require("../controller/tests");
const asyncHandler = require("../helpers/asyncHandler");

// Get tests from json
router.get(
  "/gettests",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllTests();
    res.send(data);
  })
);
router.get(
  "/gettestbyid/:id",
  asyncHandler(async (req, res) => {
    let id = req.params.id;
    const data = await controller.getTestById(id);

    res.send(data);
  })
);
router.get(
  "/getorganizationtests/:id",
  asyncHandler(async (req, res) => {
    let id = req.params.id;
    const data = await controller.getOrgTests(id);

    res.send(data);
  })
);


// Add test to the list in json
router.post(
  "/addtest",
  asyncHandler(async (req, res) => {
      try {
      const data = await controller.addTest(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.put(
  "/edittest/:id",
  asyncHandler(async (req, res) => {
      console.log("in Put");
      try {
      console.log("req:" ,req.body);
      const data = await controller.editTest(req.body);
      console.log("data:",data);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

module.exports = router;
