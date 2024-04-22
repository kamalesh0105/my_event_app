const Login = require("../libs/includes/user.class");

const login = async (req, res) => {
  console.log("login controller");

  const { username, password } = req.body;
  try {
    if (username && password) {
      const { user, session } = await Login.authenticate(username, password);
      if (user !== null && session !== null) {
        console.log("inside api log");
        res.status(200).json({
          isLogin: true,
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        });
      } else {
        res
          .status(400)
          .json({ isLogin: false, error: "Invalid username or password" });
      }
    } else {
      res.status(400).json({ error: "Username and password are required" });
    }
  } catch (error) {
    console.error("Unexpected error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = login;
