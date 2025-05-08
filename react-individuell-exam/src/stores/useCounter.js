import { create } from "zustand";

const getInitialQuantity = () => {
  try {
    const stored = localStorage.getItem("quantity");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const useCounter = create((set, get) => ({
  quantity: getInitialQuantity(),

  increase: (id) => {
    const quantity = get().quantity;
    const updated = {
      ...quantity,
      [id]: (quantity[id] || 0) + 1,
    };
    localStorage.setItem("quantity", JSON.stringify(updated));
    set({ quantity: updated });
  },

  decrease: (id) => {
    const quantity = get().quantity;
    const updated = {
      ...quantity,
      [id]: Math.max((quantity[id] || 0) - 1, 0),
    };
    localStorage.setItem("quantity", JSON.stringify(updated));
    set({ quantity: updated });
  },

  reset: (id) => {
    const quantity = get().quantity;
    const updated = {
      ...quantity,
      [id]: 0,
    };
    localStorage.setItem("quantity", JSON.stringify(updated));
    set({ quantity: updated });
  },

  resetAll: () => {
    localStorage.setItem("quantity", JSON.stringify({}));
    set({ quantity: {} });
  },
}));

export default useCounter;
