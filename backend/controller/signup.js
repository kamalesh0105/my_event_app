const signUp = require("../libs/includes/signup.class");

const Signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    console.log("in backend api");
    if (username && password) {
      const result = await signUp.signup(username, password);
      if (result) {
        res.status(200).json({ res: result });
      } else {
        res.status(400).json({ res: "error" });
      }
    } else {
      res.status(400).json({ error: "Username and password are required" });
    }
  } catch (error) {
    console.error("Unexpected error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = Signup;
