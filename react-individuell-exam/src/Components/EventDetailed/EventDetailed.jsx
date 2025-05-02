import { useParams } from "react-router-dom";
import "./eventDetailed.css";

function EventDetailed({ events }) {
  const { id } = useParams();
  console.log("Event ID:", id);

  const event = events.find(event => event.id === id);
  console.log("Fetched event data:", event);

  if (!event) return <p>Event med ID {id} kunde inte hittas.</p>;

  return (
    <article className="event-info">
      <h2 className="event-info_title">{event.name}</h2>
      <p className="event-info_date-time">
        {event.when?.date} kl {event.when?.from || "Starttid saknas"} - {event.when?.to || "Sluttid saknas"}
      </p>
      <p className="event-info_place">@ {event.where}</p>
    </article>
  );
}

export default EventDetailed;
