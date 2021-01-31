const db = require("../DAL/db.testsRepository.js");

class TestsController {
  // Get Tests
  getAllTests() {
    return db.getAllTests();
  }
  getTestById(id) {
    return db.getTestById(id);
  }

  // Add test to the list
  addTest(test) {
    console.log("test:",test);
    if (!test) throw "Test has no title";
    return db.addTest(test);
  }
  editTest(newTest){
    console.log("new Test:",newTest);
    if (!newTest) throw "Test has no title";
    return db.editTest(newTest);
  }
}
  
module.exports = new TestsController();
