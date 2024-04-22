const supabase = require("../../config/supabase");

class login {
  static isset(variable) {
    return typeof variable !== "undefined" && variable !== null;
  }

  static async authenticate(username, password) {
    console.log("login class");
    if (this.isset(username) && this.isset(password)) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: username,
          password: password,
        });
        const { user, session } = data;
        if (user && session) {
          //console.log("User:", user);
          console.log("Session:", session);
          return data;
        } else {
          console.log("Error:", error);
          return false;
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        return false;
      }
    } else {
      return false;
    }
  }
}

module.exports = login;
