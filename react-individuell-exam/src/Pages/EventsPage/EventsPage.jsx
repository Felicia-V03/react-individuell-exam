import EventsList from "../../Components/EventsList/EventsList.jsx";
import SearchBar from "../../Components/SerachBar/SearchBar.jsx";
import PageSwitch from "../../Components/PageSwitch/PageSwitch.jsx";
import "./eventsPage.css";

function EventsPage() {
  return (
    <div className="events-page page-container">
      <h1 className="page_title">Events</h1>
      <SearchBar />
      <EventsList />
      <PageSwitch />
    </div>
  );
}

export default EventsPage;