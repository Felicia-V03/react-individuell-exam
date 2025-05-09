import Barcode from "react-barcode";
import "./tickets.css";

//ticket card
function Tickets({ event}) {
  return (
    <div className="ticket-card">
      <section className="ticket-head ticket-box ticket-dot">
        <span className="ticket-card__header">WHAT</span>
        <h3 className="ticket-card__name">{event.name}</h3>
      </section>
      <section className="ticket-section ticket-box ticket-dot">
        <span className="ticket-card__header">WHERE</span>
        <p className="ticket-card__where">{event.where}</p>
      </section>
      <section className="ticket-info ticket-dot">
        <aside className="ticket-info-when ticket-box">
          <span className="ticket-card__header">WHEN</span>
          <p className="ticket-card__date ticket-card__text">{event.when.date}</p>
        </aside>
        <aside className="ticket-info-from ticket-box">
          <span className="ticket-card__header">FROM</span>
          <p className="ticket-card__from ticket-card__text">{event.when.from}</p>
        </aside>
        <aside className="ticket-info-to ticket-box">
          <span className="ticket-card__header">TO</span>
          <p className="ticket-card__to ticket-card__text">{event.when.to}</p>
        </aside>
      </section>
      <section className="ticket-seat ticket-box ticket-dot">
        <span className="ticket-card__header">INFO</span> 
        <p className="ticket-card__seat">{event.seat}</p>
      </section>
      <section className="ticket-barcode ticket-dot">
        <Barcode value={event.uuid} className="ticket-card__barcode"/>
      </section>
    </div>
  );
}

export default Tickets;
