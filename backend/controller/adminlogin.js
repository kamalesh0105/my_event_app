const User = require("../libs/includes/user.class");

const Adminlogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    console.log("in backend api");
    if (username && password) {
      const isLogin = await User.authenticate(username, password);
      if (isLogin) {
        res.status(200).json({ isLogin: true });
      } else {
        res.status(400).json({ isLogin: false });
      }
    } else {
      res.status(400).json({ error: "Username and password are required" });
    }
  } catch (error) {
    console.error("Unexpected error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = Adminlogin;
