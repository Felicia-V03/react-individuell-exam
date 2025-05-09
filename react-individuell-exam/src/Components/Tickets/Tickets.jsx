import React from "react";

function Tickets({ event,  }) {
  return (
    <div className="ticket-card">
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>Platsnummer: {event.seat}</p>
    </div>
  );
}

export default Tickets;
