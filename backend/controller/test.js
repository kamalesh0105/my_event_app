const test = require("../libs/includes/test.class");

const testapi = async (req, res) => {
  //   const { username, password } = req.body;
  try {
    const data = await test.testapi();
    console.log(data.users.length);
    if (data) {
      res.status(200).json({ data: data.users.length });
    } else {
      res.status(400).json({ data: "no users" });
    }
  } catch (error) {
    console.error("Unexpected error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = testapi;
