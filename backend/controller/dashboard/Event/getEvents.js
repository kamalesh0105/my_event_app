const db = require("../../../libs/includes/Event.class");
const getEvents = async (req, res) => {
  const { event_type } = req.query;
  try {
    const data = await db.getEvents(event_type);
    if (data != null) {
      res.status(200).json({ data: data, status: true });
    } else {
      res.status(400).json({ data: data, status: false });
    }
  } catch (err) {
    res.status(500).json({ data: err, status: false });
  }
};

module.exports = getEvents;
