import { create } from "zustand";

const getInitialCart = () => {
  try {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const getQuantityFromStorage = (id) => {
  try {
    const storedQuantities = localStorage.getItem("quantity");
    const parsed = storedQuantities ? JSON.parse(storedQuantities) : {};
    return parsed[id] || 1;  // default = 1 om inget finns
  } catch {
    return 1;
  }
};

const useCart = create((set, get) => ({
  cart: getInitialCart(),

  addToCart: (item) => {
    const cart = get().cart;
    const quantityFromStorage = getQuantityFromStorage(item.id);

    const existingItem = cart.find((i) => i.id === item.id);

    const updatedCart = existingItem
      ? cart.map((i) =>
          i.id === item.id
            ? { ...i, quantity: quantityFromStorage }  // ersätt med kvantitet från storage
            : i
        )
      : [...cart, { ...item, quantity: quantityFromStorage }];

    set({ cart: updatedCart });
    get().saveToLocalStorage(updatedCart);
  },

  saveToLocalStorage: (cart) => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  },

  updateItemQuantity: (id, quantity) => {
  const cart = get().cart;
  const updatedCart = cart.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
  set({ cart: updatedCart });
  get().saveToLocalStorage(updatedCart);
  },

  removeFromCart: (id) => {
    const updatedCart = get().cart.filter((item) => item.id !== id);
    set({ cart: updatedCart });
    get().saveToLocalStorage(updatedCart);
  },

  clearCart: () => {
    set({ cart: [] });
    get().saveToLocalStorage([]);
  },
}));

export default useCart;
