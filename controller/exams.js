const db = require("../DAL/db.examsRepository.js");

class ExamsController {
  // Get Exams
  getAllExams() {
    return db.getAllExams();
  }
  getExamById(id) {
    return db.getExamById(id);
  }

  // Add Exam to the list
  addExam(exam) {
    console.log("exam:",exam);
    if (!exam) throw "Exam has no title";
    return db.addExam(exam);
  }
  
}
  
module.exports = new ExamsController();
