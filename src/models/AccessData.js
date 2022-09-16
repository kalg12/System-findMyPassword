const { query } = require("../libs/db.js");

class Data {
  async getAll() {
    const data = await query("SELECT * FROM datos");
    console.log(data);
  }
}

module.exports = Data;