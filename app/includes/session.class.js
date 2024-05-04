import supabaseClient from "@/app/config/supabaseClient";
class Session {
  constructor(data) {
    this.data = data;
  }
  static async setSession(data) {
    const { access_token, refresh_token } = data;
    console.log(access_token, refresh_token);
    const res = await supabaseClient.auth.setSession({
      access_token,
      refresh_token,
    });
  }

  static async getSession() {
    const session = supabaseClient.auth.getSession();
    return session;
  }
  static async getUser() {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    return user;
  }
  static async isLoggedIn() {
    const session = await Session.getSession();
    const { data } = session;
    if (data.session != null) {
      const user = await Session.getUser;
      if (user) {
        console.log("User is authorized");
        return true;
      } else {
        console.log("User not found");
        return false;
      }
    } else {
      console.log("No session found");
      return false;
    }
  }

  static async logoutSession() {
    try {
      const stat = await supabaseClient.auth.signOut();
    } catch (error) {
      console.log("Error loggin out");
      return { redirect: { destination: "none", status: false } };
    }
    return { redirect: { destination: "/auth/login", status: true } };
  }
}
export default Session;
