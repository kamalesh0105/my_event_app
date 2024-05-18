const Login = require("../libs/includes/user.class");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username && password) {
      const data = await Login.authenticate(username, password);
      const { user, session } = data;
      if (user !== null && session !== null) {
        res.status(200).json({
          isLogin: true,
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        });
      } else {
        if (data.email) {
          res.status(200).json({ isLogin: false, error: data.email });
        } else {
          res.status(400).json({ isLogin: false });
        }
      }
    } else {
      res.status(400).json({ error: "Username and password are required" });
    }
  } catch (error) {
    console.error("Unexpected error during login:", error);
    res.status(500).json({ error: data.email });
  }
};

module.exports = login;
