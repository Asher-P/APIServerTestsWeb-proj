const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/Tests.json";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

class DBTestsRepository {
  async getAllTests() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }
 async getTestById(id) {

    const data = JSON.parse(await readFile(jsonFileName));
    let found = data.find(i => i.Id === id);
    console.log(found);
    if (found)
      return found;
    else
      return undefined;
  }
 async getOrgTests(id) {
    const data = JSON.parse(await readFile(jsonFileName));
    let found = data.filter(t => Number(t.creatorOrganization.Id) === Number(id));
    console.log(found);
    if (found)
      return found;
    else
      return undefined;
  }

  async addTest(test) {
    console.log("in add test")
    let data = JSON.parse(await readFile(jsonFileName));
    const generateId = uuidv4()
    const newTest = { Id: generateId, ...test };
    data.push(newTest);
    await writeFile(jsonFileName, JSON.stringify(data));
    return newTest;
  }

  async editTest(newTest){
    console.log("in edit test")
    let data = JSON.parse(await readFile(jsonFileName));
    let testToChange = data.find(t=> t.Id === newTest.Id);
    let indexOfOldTest = data.findIndex(i=>i.Id === newTest.Id)
    let c = Object.keys(newTest);
    console.log("c",c);
    console.log("newTest",newTest);
    console.log("test to Chane",testToChange);
    c.forEach(p=>testToChange[p]= newTest[p]);
    data.splice(indexOfOldTest,1,testToChange);
    await writeFile(jsonFileName, JSON.stringify(data));
    return testToChange;
  }
}

module.exports = new DBTestsRepository();
