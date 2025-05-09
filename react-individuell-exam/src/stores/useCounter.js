import { create } from "zustand";
import useCart from "./useCartStore";

const getInitialQuantity = () => {
  try {
    const stored = localStorage.getItem("quantity");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const persist = (quantity) => {
  localStorage.setItem("quantity", JSON.stringify(quantity));
};

const useCounter = create((set, get) => ({
  quantity: getInitialQuantity(),

  increase: (id) => {
    set((state) => {
      const newQty = (state.quantity[id] || 0) + 1;
      const updated = { ...state.quantity, [id]: newQty };
  
      localStorage.setItem("quantity", JSON.stringify(updated));
  
      const cartItem = useCart.getState().cart.find((item) => item.id === id);
      if (cartItem) {
        useCart.getState().updateItemQuantity(id, newQty);
      }
  
      return { quantity: updated };
    });
  },

  decrease: (id) => {
    const quantity = get().quantity;
    const newQuantity = Math.max((quantity[id] || 0) - 1, 0);
    const updated = { ...quantity, [id]: newQuantity };
    localStorage.setItem("quantity", JSON.stringify(updated));
    set({ quantity: updated });

    if (newQuantity === 0) {
      useCart.getState().removeFromCart(id); // 🧹 tar bort från cart
    } else {
      useCart.getState().updateItemQuantity(id, newQuantity); // 🔁 sync
    }
  },

  reset: (id) => {
    const quantity = get().quantity;
    const updated = { ...quantity, [id]: 0 };
    persist(updated);
    set({ quantity: updated });
  },

  resetAll: () => {
    persist({});
    set({ quantity: {} });
  },
}));

export default useCounter;
