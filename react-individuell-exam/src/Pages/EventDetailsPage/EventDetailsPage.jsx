import EventDetailed from "../../Components/EventDetailed/EventDetailed";
import CartButton from "../../Components/CartButton/CartButton";
import { useFetch } from "../../Hooks/useFetch";
import "./eventDetailsPage.css";

function EventDetailsPage() {
  const { data: eventsData, isLoading, isError } = useFetch("https://santosnr6.github.io/Data/events.json");
  const events = eventsData?.events || [];

  if (isLoading) return <p>Laddar event...</p>;
  if (isError) return <p>Ett fel uppstod vid hämtning av event.</p>;

  return (
    <div className="event-page page-container">
      <h1 className="page_title">Event</h1>
      <p className="page_sub">You are about to score some tickets to</p>
      <EventDetailed events={events}/>
      <CartButton />
    </div>
  );
}

export default EventDetailsPage;