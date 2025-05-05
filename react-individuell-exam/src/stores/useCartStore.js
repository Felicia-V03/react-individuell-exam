import { create } from "zustand";

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const useCart = create((set, get) => ({
  cart: getCartFromLocalStorage(),

  addToCart: (newEvent) => {
    const cart = get().cart;
    const index = cart.findIndex(e => e.id === newEvent.id);

    let updatedCart;
    if (index !== -1) {
      updatedCart = cart.map((e, i) =>
        i === index ? { ...e, quantity: e.quantity + newEvent.quantity } : e
      );
    } else {
      updatedCart = [...cart, newEvent];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    set({ cart: updatedCart });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  }
}));

export default useCart;
