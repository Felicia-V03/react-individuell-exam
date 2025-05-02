import { create } from "zustand";

const useEventData = create((set) => ({
  event: [], // Initial state för event-data
  setEventData: (newEventData) => set({ event: newEventData }), // Funktion för att uppdatera event-data
}));

export default useEventData;