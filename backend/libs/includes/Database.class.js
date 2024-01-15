const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

class Database {
  constructor() {
    dotenv.config();
    this.pool = mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async query(sql, values) {
    const connection = await this.pool.getConnection();
    try {
      const sanitizedValues = values.map((value) =>
        value === undefined ? null : value
      );
      const [rows, fields] = await connection.execute(sql, values);
      return rows;
    } finally {
      connection.release();
    }
  }
}

module.exports = Database;
