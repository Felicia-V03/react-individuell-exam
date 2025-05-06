import { create } from "zustand";

const savedQuantity = (() => {
  const stored = localStorage.getItem("quantity");
  const parsed = parseInt(stored);
  return isNaN(parsed) ? 0 : parsed;
})();
const useCounter = create((set) => ({
  quantity: savedQuantity,
  increase: () =>
    set((state) => {
      const newQuantity = state.quantity + 1;
      localStorage.setItem("quantity", newQuantity);
      return { quantity: newQuantity };
    }),
  decrease: () =>
    set((state) => {
      const newQuantity = state.quantity > 0 ? state.quantity - 1 : 0;       
      localStorage.setItem("quantity", newQuantity);
      return { quantity: newQuantity };
    }),
  reset: () => {
    localStorage.setItem("quantity", 0);
    set({ quantity: 0 });
  },
}));

export default useCounter;