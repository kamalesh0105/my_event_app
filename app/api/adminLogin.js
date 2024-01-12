export default function handler(req, res) {
  [username, password] = req.body;
  if (user.username == "admin" && user.password == "root") {
    console.log("Login success");
    navigate("/");
  } else {
    console.log("login failed");
  }
  res.status(200).json({ message: "Hello from the API!" });
}
