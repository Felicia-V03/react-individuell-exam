import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';

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
  seat = `Section ${rows[currentRow]}, seat ${currentSeat}`;
  if (usedSeats.has(seat)) {
    currentSeat += 1;
    if (currentSeat > maxSeatsPerRow) {
      currentSeat = 1;
      currentRow += 1;
    }
  }
  if (currentRow >= rows.length) {
    throw new Error("Inga lediga platser kvar.");
  }
} while (usedSeats.has(seat));

    
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

      const addTickets = (event) => {
        const seatList = generateSeat(usedSeats, event.quantity);
        seatList.forEach((seat, index) => {
          newTickets.push({
            ...event,
            seat,
            seatNumber: index + 1,
            uuid: uuidv4().replace(/-/g, '').substring(0, 5).toUpperCase(), //Pusha in uuid till barcode
          });
        });
      };

      if (Array.isArray(ticket)) {
        ticket.forEach(addTickets);
      } else {
        addTickets(ticket);
      }

      const updated = [...state.tickets, ...newTickets];
      localStorage.setItem("tickets", JSON.stringify(updated));
      return { tickets: updated };
    });
  },
}));

export default useTickets;