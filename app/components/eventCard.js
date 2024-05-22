const EventCard = ({ event }) => {
  return (
    <div key={event.event_id} className="col-md-4 mb-4">
      <div
        className="card event-card"
        style={{ height: "300px", margin: "20px" }}
      >
        <img src={event.public_url} className="card-img-top" alt={event.name} />
        <div className="card-body">
          <h5 className="card-title text-dark ">
            {event.name + "(" + event.event_id + ")"}
          </h5>
          <p className="card-text description text-dark ">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
