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
          return data;
        } else {
          console.log("Error:", error);
          if (error && error.message === "Email not confirmed") {
            return { user: null, email: true };
          } else {
            return { user: null, email: false };
          }
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        return { user: null };
      }
    } else {
      return { user: null };
    }
  }
}

module.exports = login;
