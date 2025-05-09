import { create } from "zustand";

const getTickets = () => {
  const stored = localStorage.getItem("tickets");
  return stored ? JSON.parse(stored) : [];
};

const generateSeat = (usedSeats, quantity) => {
  const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Möjliga sektioner/rader
  let seatList = [];

  // Hitta en sektion där det finns tillräckligt med lediga platser
  for (let i = 0; i < 100; i++) {  // Maximalt 100 försök
    const row = rows[Math.floor(Math.random() * rows.length)]; // Slumpmässig sektion
    let availableSeats = [];

    // Kolla om det finns tillräckligt med lediga platser i denna rad
    for (let seatNumber = 1; seatNumber <= 30; seatNumber++) {
      const seat = `Rad ${row}, plats ${seatNumber}`;
      if (!usedSeats.has(seat)) {
        availableSeats.push(seat);
      }

      if (availableSeats.length === quantity) {
        break;
      }
    }

    // Om vi har hittat tillräckligt med platser, tilldela dem
    if (availableSeats.length === quantity) {
      // Markera dessa platser som använda
      availableSeats.forEach((seat) => usedSeats.add(seat));
      seatList = availableSeats;
      break;
    }
  }

  return seatList;
};



const useTickets = create((set) => ({
  tickets: getTickets(),

  saveTickets: (ticket) => {
    set((state) => {
      const newTickets = [];
      const usedSeats = new Set(state.tickets.map((t) => t.seat)); // Redan använda platser

      if (Array.isArray(ticket)) {
        ticket.forEach((event) => {
          // Slumpmässigt generera säten för varje biljett
          const seatList = generateSeat(usedSeats, event.quantity);
          seatList.forEach((seat) => {
            newTickets.push({
              ...event,
              seat, // Tilldela sittplats
            });
          });
        });
      } else {
        // För en enskild biljett
        const seatList = generateSeat(usedSeats, ticket.quantity);
        seatList.forEach((seat) => {
          newTickets.push({
            ...ticket,
            seat, // Tilldela sittplats
          });
        });
      }

      const updated = [...state.tickets, ...newTickets];
      localStorage.setItem("tickets", JSON.stringify(updated));
      return { tickets: updated };
    });
  },
}));


export default useTickets;
