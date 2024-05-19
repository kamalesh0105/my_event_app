const supabase = require("../../config/supabase");

class Events {
  //insert a event into the db and upload the img url too
  static async add_event(
    name,
    description,
    event_id,
    image,
    imageName,
    fileExtension
  ) {
    const { res } = await this.add_event_data(event_id, name, description);
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
  static async add_event_data(event_id, name, description) {
    const { error } = await supabase.from("events").insert({
      event_id,
      name,
      description,
    });

    if (error == null) {
      return { res: true };
    } else {
      console.log(error);
      return { res: false };
    }
  }
  //fetches all events from db
  static async getEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if (data) {
      return data;
    } else {
      console.log("error manage event");
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
