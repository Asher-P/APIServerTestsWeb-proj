const db = require("../DAL/db.testsRepository.js");

class TestsController {
  // Get Tests
  getAllTests() {
    return db.getAllTests();
  }

  // Add test to the list
  addTest(test) {
    console.log("test:",test);
    if (!test) throw "Test has no title";
    return db.addTest(test);
  }
}
module.exports = new TestsController();
