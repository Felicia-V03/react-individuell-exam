import { create } from "zustand";

const getTickets = () => {
  const fromCart = localStorage.getItem("cart");
  const ticketsStores = localStorage.setItem("tickets", fromCart);
  return ticketsStores ? JSON.parse(ticketsStores) : [];
};

const useTickets = create((set) => ({
  tickets: getTickets(),
  saveTickets: (ticket) => {
    set((state) => {
      const newTickets = Array.isArray(ticket)
        ? [...state.tickets, ...ticket]
        : [...state.tickets, ticket];
      localStorage.setItem("tickets", JSON.stringify(newTickets));
      return { tickets: newTickets };
    });
  },
}));

export default useTickets;