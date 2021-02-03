const db = require("../DAL/db.organizationsRepository.js");

class OrganizationsController {
  getAllOrganizations() {
    console.log("in controller");
    return db.getAllOrganizations();
  }
}

module.exports = new OrganizationsController();
