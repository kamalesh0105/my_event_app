const bcrypt = require("bcryptjs");
const Database = require("./Database.class");
class User {
  //set the password from the gethashedpass function
  static password = null;
  static db = new Database();
  constructor(username, password) {
    this.password = password;
    this.username = username;
  }
  static async gethashedpass(username) {
    try {
      // Create a database instance
      const db = new Database();

      // SQL query to retrieve the hashed password based on the username
      const sql = "SELECT `password` FROM `auth` WHERE `username` = ? LIMIT 1 ";
      const result = await User.db.query(sql, [username]);

      // Extract the hashed password from the result
      const hashedPasswordFromDb = result[0]?.password;

      if (hashedPasswordFromDb) {
        User.password = hashedPasswordFromDb;
        return true;
      } else {
        console.log("User not found in the database");
        return false;
      }
    } catch (error) {
      console.error("Error loading password from the database:", error.message);
      return false;
    }
  }
  static async authenticate(username, password) {
    if (!User.password) {
      if (!(await User.gethashedpass(username))) {
        return false;
      }
    }
    try {
      const hashedPassword = User.password;
      const isMatch = bcrypt.compareSync(password, hashedPassword);
      if (isMatch) {
        console.log("Authentication successful");
        return true;
      } else {
        console.log("Authentication failed: Incorrect password");
        return false;
      }
    } catch (e) {
      console.error("Error during authentication:", e.message);
      return false;
    }
  }
}

module.exports = User;
