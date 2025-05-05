import { create } from "zustand";

const useTickets = create((set) => ({
    tickets: [],
    saveTickets: (ticket) => {
      set((state) => ({ tickets: [...state.tickets, ticket] }));
    },
}));

export default useTickets;