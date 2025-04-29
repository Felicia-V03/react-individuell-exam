import { Link } from "react-router-dom";
import "./eventsList.css";

function EventsList({event}) {
  if (!event) {
    return <p>Inga event tillgängliga.</p>;
  }

  console.log("Event data:", event);
  
  return (
        <Link to={`/event/${event.id}`} key={event.id} className="events-item">
          <p className="events-item_date">{event.when.date}</p>
          <article className="events-item_info">
            <h2 className="events-item_title">{event.name}</h2>
            <p className="events-item_place">{event.where}</p>
            <article className="events-item_sub">
              <p className="events-item_time">{event.when.from} - {event.when.to}</p>
              <p className="events-item_price">{event.price} SEK</p>
            </article>
          </article>
        </Link>
        
  );
}


export default EventsList;