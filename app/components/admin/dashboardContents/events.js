const Events = () => {
  const eventsData = {
    events: [
      {
        id: 1,
        title: "Event 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/200/80",
      },
      {
        id: 2,
        title: "Event 2",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://picsum.photos/200/80",
      },
      {
        id: 3,
        title: "Event 3",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        image: "https://picsum.photos/200/80",
      },
      {
        id: 3,
        title: "Event 3",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://picsum.photos/200/80",
      },
    ],
  };
  const events = eventsData.events;
  return (
    <div className="container">
      <div className=""></div>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div
              className="card event-card"
              style={{ height: "300px", margin: "20px" }}
            >
              <img
                src={event.image}
                className="card-img-top"
                alt={event.title}
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text description">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
