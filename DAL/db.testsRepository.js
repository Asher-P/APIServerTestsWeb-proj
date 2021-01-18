const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/Tests.json";

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

class DBTestsRepository {
  async getAllTests() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }

  async addTest(test) {
    console.log("in add test")
    let data = JSON.parse(await readFile(jsonFileName));
    const generateId = uuidv4()
    const newTest = { Id: generateId, Questions:test.Questions };
    data.push(newTest);
    await writeFile(jsonFileName, JSON.stringify(data));
    return newTest;
  }
}

module.exports = new DBTestsRepository();
