import "./eventDetailed.css";

function EventDetailed({ event }) {
  if (!event) {
    return console.log("Event data is not available.");
  }

  return (
    <article className="event-info">
      <h2 className="event-info_title">{event.name}</h2>
      <p className="event-info_date-time">
        {event.when.date} kl {event.when.from} - {event.when.to}
      </p>
      <p className="event-info_place">@ {event.where}</p>
    </article>
  );
}

export default EventDetailed;
