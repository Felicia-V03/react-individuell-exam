import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import useCounter from "../../stores/useCounter.js";
import { Link } from "react-router-dom";
import "./eventsList.css";

function EventsList(event) {
  const { data: eventsData, isLoading, isError } = useFetch("https://santosnr6.github.io/Data/events.json");
  const events = eventsData?.events || [];

  console.log("Fetched events:", events);

  const { reset } = useCounter();
  useEffect(() => {
    reset();
  }, [reset]);
  
  if (isLoading) return <p>Laddar event...</p>;
  if (isError) return <p>Ett fel uppstod vid hämtning av event.</p>;

  if (!event) {
    return <p>Inga event tillgängliga.</p>;
  }

  const savedQuantity = (() => {
    const stored = localStorage.getItem("quantity");
    const parsed = parseInt(stored);
    return isNaN(parsed) ? 0 : parsed;
  })();
  
  return (
    <ul className="events-list">
      {events.map((event) => (
        <Link to={`/event/${event.id}`} key={event.id} className="events-item">
        <p className="events-item_date"> 
          {new Date(event.when.date).toLocaleDateString("en-GB",
            {
                day: "2-digit",
                month: "short"
            }
          ).toUpperCase()}
        </p>
        <article className="events-item_info">
          <h2 className="events-item_title">{event.name}</h2>
          <p className="events-item_place">{event.where}</p>
          <article className="events-item_sub">
            <p className="events-item_time">{event.when.from} - {event.when.to}</p>
            <p className="events-item_price">{event.price} sek</p>
          </article>
        </article>
      </Link>
      ))}
    </ul>  
  );
}

export default EventsList;