import PageSwitch from "../../Components/PageSwitch/PageSwitch.jsx";
import "./ticketPage.css";

function TicketPage() {
  return (
    <div className="ticket-page page-container">
      <h1 className="ticket">Ticket Page</h1>
      <PageSwitch />
    </div>
  );
}

export default TicketPage;