const db = require("../DAL/db.questionsRepository.js");

class QuestionsController {
  // Get Questions
  getAllQuestions() {
    return db.getAllQuestions();
  }

  // Add question to the list
  addQuestion(question) {
    if (!question.Title) throw "question has no title";
    if (!question.QuestionBody) throw "question has no content";
    return db.addQuestion(question);
  }
}

module.exports = new QuestionsController();
