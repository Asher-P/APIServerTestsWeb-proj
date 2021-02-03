const express = require("express");
const router = express.Router();
const controller = require("../controller/organizations");
const asyncHandler = require("../helpers/asyncHandler");

router.get(
  "/getOrganizations",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllOrganizations();
    console.log("in router");
    res.send(data);
  })
);

module.exports = router;
