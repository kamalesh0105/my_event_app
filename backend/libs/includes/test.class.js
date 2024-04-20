const supabase = require("../../config/supabase");
class test {
  static async testapi() {
    try {
      const { data, error } = await supabase.auth.admin.listUsers();
      if (data) {
        return data;
      } else {
        console.log("no users found" + error);
      }
    } catch (error) {
      console.log("something went wrong" + error);
    }
  }
}
module.exports = test;
