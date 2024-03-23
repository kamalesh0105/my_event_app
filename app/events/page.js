const Events = () => {
  const eventsData = {
    technicalEvents: [
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
    nonTechnicalEvents: [
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
  const EventCard = ({ event }) => {
    return (
      <div className="col-md-4 mb-4">
        <div
          className="card event-card"
          style={{ height: "300px", margin: "20px" }}
        >
          <img src={event.image} className="card-img-top" alt={event.title} />
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text description">{event.description}</p>
          </div>
        </div>
      </div>
    );
  };

  const events = eventsData.events;
  return (
    <div className="container events p-4">
      <div className="row events-tech">
        <h3 className="p-4 text-light">Technical Events</h3>
        {eventsData.technicalEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="row events-non-tech">
        <h3 className="text-light p-4 ">Non-Technical Events</h3>
        {eventsData.nonTechnicalEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
