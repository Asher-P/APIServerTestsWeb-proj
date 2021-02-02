const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/Exams.json";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

class DBExamsRepository {
  async getAllExams() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }
 async getExamById(id) {

    const data = JSON.parse(await readFile(jsonFileName));
    let found = data.find(i => i.Id === id);
    console.log(found);
    if (found)
      return found;
    else
      return undefined;
  }

  async addExam(exam) {
    console.log("in add exam")
    let data = JSON.parse(await readFile(jsonFileName));
    const generateId = uuidv4()
    const newExam = { Id: generateId, ...exam };
    data.push(newExam);
    await writeFile(jsonFileName, JSON.stringify(data));
    return newExam;
  }

}

module.exports = new DBExamsRepository();
