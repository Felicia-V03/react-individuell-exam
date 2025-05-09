

function Tickets({event, seatNumber}) {
  const seat = event.seat;

  return (
    <p>
      ID: {event.id}
      section: {seat}
      seatNumber: {seatNumber}

    </p>
  )
}

export default Tickets;