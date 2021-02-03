const db = require("../DAL/db.questionsRepository.js");

class QuestionsController {
  // Get Questions
  getAllQuestions() {
    return db.getAllQuestions();
  }

  getQuestionById(id) {
    return db.getQuestionById(id);
  }
  // Add question to the list
  addQuestion(question) {
    if (!question.Title) throw "question has no title";
    if (!question.QuestionBody) throw "question has no content";
    if (!question.Answers) throw "question has no answers";
    if (!question.QuestionType) throw "question has no type? weird...";
    return db.addQuestion(question);
  }

  editQuestion(questionToEdit) {
    if(questionToEdit === undefined || questionToEdit === null) throw "Error! The Question you wanted to edit is either null or undefined"
    let question = questionToEdit.question;
    let id = Number(questionToEdit.id);
    return db.editQuestion(question, id);
  }
}

module.exports = new QuestionsController();
