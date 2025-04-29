import { useFetch } from "../../Hooks/useFetch";
import EventsList from "../../Components/EventsList/EventsList.jsx";
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
          <EventsList key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
