const supabase = require("../../config/supabase");
class signup {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  static isset(variable) {
    return typeof variable !== "undefined" && variable !== null;
  }

  static async signup(username, password) {
    if (this.isset(username) && this.isset(password)) {
      const { data, error } = await supabase.auth.signUp({
        email: username,
        password: password,
      });
      console.log("errror" + error);
      return data;
    } else {
      return false;
    }
  }
}
module.exports = signup;
