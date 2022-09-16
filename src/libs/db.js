const mysql = require("mysql2/promise")
const {DATABASE, HOST, PASSWORD, PORT, USERNAME} = require("../config/index")

const connecion = async () => {
    const conn = await mysql.createConnection(
      {
        host: HOST,
        user: USERNAME,
        password: PASSWORD,
        database: DATABASE,
        port: PORT
      }
    )
    return conn
  }

const query = async (sql, values) => {
    const result = await (await connecion()).query(sql, values)

    console.log(result)
    return result
    }

module.exports = {
    query
}