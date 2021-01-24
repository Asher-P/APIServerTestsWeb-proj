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
    if (!question.Answers) throw "question has no answers";
    if (!question.QuestionType) throw "question has no type? weird...";
    return db.addQuestion(question);
  }
}

module.exports = new QuestionsController();
