import PageSwitch from "../../Components/PageSwitch/PageSwitch.jsx";
import TicketsCarousel from "../../Components/TicketCarosel/TicketCarosel.jsx";
import "./ticketPage.css";

function TicketPage() {
  return (
    <div className="ticket-page page-container">
      <TicketsCarousel />
      <PageSwitch />
    </div>
  );
}

export default TicketPage;