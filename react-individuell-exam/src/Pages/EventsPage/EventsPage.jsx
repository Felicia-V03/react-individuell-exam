import { useFetch } from "../../Hooks/useFetch";
import { Link } from "react-router-dom";
import "./eventsPage.css";

function EventsPage() {
  const { data: eventsData, isLoading, isError } = useFetch("https://santosnr6.github.io/Data/events.json");
  const events = eventsData?.events || [];

  console.log("Fetched events:", events);
  
  if (isLoading) return <p>Laddar event...</p>;
  if (isError) return <p>Ett fel uppstod vid hämtning av event.</p>;


  return (
    <div className="events-page page-container">
      <h1 className="events-page_title">Events</h1>
      <p>Search</p>
      <ul className="events-list">
        {events.map((event) => (
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
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
