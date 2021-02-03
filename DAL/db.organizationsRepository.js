const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/Organizations.json";

class DBOrganizationsRepository {
  async getAllOrganizations() {
    const data = JSON.parse(await readFile(jsonFileName));
    console.log("in repository", data);
    return data;
  }
}

module.exports = new DBOrganizationsRepository();
