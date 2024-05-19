const db = require("../../../libs/includes/Event.class");
const { decode } = require("base64-arraybuffer");
const AddEvents = async (req, res) => {
  console.log("Received request to add event with image");
  const { name, description, event_id } = req.body;
  // Check if image data is present in the request body
  console.log(name, description, event_id);
  if (req.file && name && description && event_id) {
    const image = req.file;
    const filename = image.originalname;
    const fileExtension = filename.split(".").pop().toLowerCase();
    const imageName = event_id + "." + fileExtension;
    const fileBase64 = decode(image.buffer.toString("base64"));

    try {
      // Process the image data (e.g., store in database, upload to storage)

      const { status } = await db.add_event(
        name,
        description,
        event_id,
        fileBase64,
        imageName,
        fileExtension
      );

      // Check if data was successfully processed
      if (status) {
        res
          .status(200)
          .json({ res: true, status: "successfully created a event" });
      } else {
        res
          .status(400)
          .json({ res: false, status: "Error uploading event data" });
      }
    } catch (error) {
      console.error("Error uploading event data:", error);
      res
        .status(500)
        .json({ res: false, status: "Error processing image data" });
    }
  } else {
    // If image data is not present in the request body
    console.log("No data received in the request");
    res.status(400).json({ error: "No data received", status: false });
  }
};

module.exports = AddEvents;
