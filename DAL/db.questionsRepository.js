const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/Questions.json";

class DBQuestionsRepository {
  async getAllQuestions() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }

 async getQuestionById(id) {
   const data = JSON.parse(await readFile(jsonFileName));
   let found = data.find(item => item.Id == id);
    if (found)
      return found;
    else
      return undefined;
  }

  async addQuestion(question) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((question) => question.Id)
    );
    const newQuestion = { Id: biggestId + 1, Title: question.Title, QuestionBody: question.QuestionBody, 
      Answers: question.Answers, Tags: question.Tags, ExtraInfo: question.ExtraInfo, QuestionType: question.QuestionType, LastUpdated: question.LastUpdated };
    data.push(newQuestion);
    await writeFile(jsonFileName, JSON.stringify(data));
    return newQuestion;
  }

  async editQuestion(question, id){
    let data = JSON.parse(await readFile(jsonFileName));
    for (let index = 0; index < data.length; index++) {
      if(id === data[index].Id){
        data[index].Title = question.Title;
        data[index].QuestionBody = question.QuestionBody;
        data[index].Tags = question.Tags;
        data[index].ExtraInfo = question.ExtraInfo;
        data[index].QuestionType = question.QuestionType;
        data[index].LastUpdated = question.LastUpdated;
        data[index].Answers = question.Answers;
      }
    }
    await writeFile(jsonFileName, JSON.stringify(data));
    return question;
  }
}

module.exports = new DBQuestionsRepository();
