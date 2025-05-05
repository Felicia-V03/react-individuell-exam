import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  addToCart: (event) => {
    const cart = get().cart;
    const existingevent = cart.findIndex((cartevent) => cartevent.id === event.id);

    if (existingevent !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingevent].quantity += event.quantity;
      set({ cart: updatedCart });
    }
    else {
      set({ cart: [...cart, event] });
    }
  },
  clearCart: () => set({ cart: [] }),
}));

export default useCart;