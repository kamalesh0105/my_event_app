const supabase = require("../../config/supabase");

class Events {
  //insert a event into the db and upload the img url too
  static async add_event(
    name,
    description,
    event_id,
    image,
    imageName,
    fileExtension,
    event_type
  ) {
    const type = event_type == "tech" ? true : false;
    const { res } = await this.add_event_data(
      event_id,
      name,
      description,
      type
    );
    if (res) {
      const { data, res } = await this.add_image(
        image,
        imageName,
        fileExtension
      );

      if (res) {
        //updating the image_url from null
        const { error } = await supabase
          .from("events")
          .update({ image_url: data.path })
          .eq("event_id", event_id);
        if (error == null) {
          return { status: true };
        } else {
          console.log(error);
          return { data: error, status: false };
        }
      } else {
        return { data: "failed uploading image", status: false };
      }
    } else {
      return { data: "failed inserting event data", status: false };
    }
  }
  //insert the db content only
  static async add_event_data(event_id, name, description, type) {
    const { error } = await supabase.from("events").insert({
      event_id,
      name,
      description,
      event_type: type,
    });

    if (error == null) {
      return { res: true };
    } else {
      console.log(error);
      return { res: false };
    }
  }
  //fetches all events from db
  static async getEvents(event_type) {
    try {
      // Create a query builder
      let query = supabase.from("events").select("*");

      // Add event type filtering if provided
      if (event_type == "tech") {
        query = query.eq("event_type", true);
      } else if (event_type == "non-tech") {
        query = query.eq("event_type", false);
      }

      const { data, error } = await query;
      if (error) {
        console.log("Error fetching events: " + error.message);
        return null;
      }

      // Map over the data to generate public URLs for the images
      const eventsWithPublicUrls = data.map((event) => {
        const imagePath = event.image_url;
        const { data } = supabase.storage
          .from("event_images")
          .getPublicUrl(imagePath); // Assuming `image_url` contains the path to the image
        return {
          ...event,
          public_url: data.publicUrl,
        };
      });
      return eventsWithPublicUrls;
    } catch (error) {
      console.error("Error managing event:", error);
      return null;
    }
  }

  //insert image to the storage bucket
  static async add_image(image, imageName, fileExtension) {
    const path = `images/${imageName}`;
    const { data, err } = await supabase.storage
      .from("event_images")
      .upload(path, image, { contentType: `image/${fileExtension}` });
    if (data) {
      return { data: data, res: true };
    } else {
      console.log(err);
      return { data: err, res: false };
    }
  }
}
module.exports = Events;
