import { create } from "zustand";

const getTickets = () => {
  const stored = localStorage.getItem("tickets");
  return stored ? JSON.parse(stored) : [];
};

const generateSeat = (usedSeats, quantity) => {
  const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  const maxSeatsPerRow = 50;
  let seatList = [];
  
  let currentRow = 0;
  let currentSeat = 1;
  
  for (let i = 0; i < quantity; i++) {
    let seat;
    
    do {
      seat = `Rad ${rows[currentRow]}, Plats ${currentSeat}`;
      
      if (usedSeats.has(seat)) {
        if (currentSeat > maxSeatsPerRow) {
          currentSeat = 1;
          currentRow += 1;
        }
      }
    } while (usedSeats.has(seat) || currentSeat > maxSeatsPerRow);
    
    usedSeats.add(seat);
    seatList.push(seat);
    
    currentSeat += 1;
  }
  
  return seatList;
};

const useTickets = create((set) => ({
  tickets: getTickets(),

  saveTickets: (ticket) => {
    set((state) => {
      const newTickets = [];
      const usedSeats = new Set(state.tickets.map((t) => t.seat));

      if (Array.isArray(ticket)) {
        ticket.forEach((event) => {

          const seatList = generateSeat(usedSeats, event.quantity);
          seatList.forEach((seat, index) => {
            newTickets.push({
              ...event,
              seat,
              seatNumber: index + 1,
            });
          });
        });
      } else {
        const seatList = generateSeat(usedSeats, ticket.quantity);
        seatList.forEach((seat, index) => {
          newTickets.push({
            ...ticket,
            seat,
            seatNumber: index + 1,
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
