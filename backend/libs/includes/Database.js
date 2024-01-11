const mysql = require("mysql2/promise");

class Database {
  static conn = null;
  static async getconn() {
    if (Database.conn == null) {
      try {
        var connection = mysql.createConnection({
          host: process.env.HOST,
          user: process.env.USER,
          password: process.env.PASSWORD,
          port: process.env.DB_PORT,
          database: process.env.DATABASE,
        });

        Database.conn = connection;
        console.log(">Database connection ✅");
        return connection;
      } catch (err) {
        console.log(">Database connection ❌" + err);
      }
    } else {
      return Database.conn;
    }
  }
}
module.exports = Database;
