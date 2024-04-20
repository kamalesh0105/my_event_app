const { collection, getDocs, query, where } = require("firebase/firestore");
// const db = require("../../config/supabase");
const bcrypt = require("bcryptjs");
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static async getHashedPassword(username) {
    try {
      const q = query(
        collection(db, "auth"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return doc.data().password;
      } else {
        console.log("User not found in the database");
        return null;
      }
    } catch (error) {
      console.error("Error loading password from the database:", error.message);
      return null;
    }
  }

  static async authenticate(username, password) {
    try {
      const hashedPassword = await User.getHashedPassword(username);

      if (!hashedPassword) {
        console.log("User not found");
        return false;
      }

      const isMatch = bcrypt.compareSync(password, hashedPassword);
      if (isMatch) {
        console.log("Authentication successful");
        return true;
      } else {
        console.log("Authentication failed: Incorrect password");
        return false;
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
      return false;
    }
  }
}
module.exports = User;
