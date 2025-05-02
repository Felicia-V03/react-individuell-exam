import EventsList from "../../Components/EventsList/EventsList.jsx";
import "./eventsPage.css";

function EventsPage() {

  return (
    <div className="events-page page-container">
      <h1 className="page_title">Events</h1>
      <p>Search</p>
      <EventsList />
    </div>
  );
}

export default EventsPage;