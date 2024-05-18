const db = require("../../../libs/includes/Event.class");
const getEvents = async (req, res) => {
  const { name, description, image } = req.body;
  try {
    const data = await db.getEvents();
    if (data != null) {
      res.status(200).json({ data: data, staus: true });
    } else {
      res
        .status(400)
        .json({ err: "error fetching data", data: data, status: false });
    }
  } catch {
    res.status(500).json({ err: "errror uploading", status: false });
  }
};

module.exports = getEvents;
