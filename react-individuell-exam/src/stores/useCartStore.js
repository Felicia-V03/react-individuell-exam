import { create } from "zustand";

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const useCart = create((set, get) => ({
  cart: getCartFromLocalStorage(),

  addToCart: (event) => {
    const cart = get().cart;
    const existing = cart.find((e) => e.id === event.id);

    const updatedCart = existing
      ? cart.map((e) =>
          e.id === event.id ? { ...e, quantity: e.quantity + event.quantity } : e
        )
      : [...cart, { ...event, quantity: event.quantity }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    set({ cart: updatedCart });
  },

  increaseQuantity: (id) => {
    const cart = get().cart;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    set({ cart: updatedCart });
  },

  decreaseQuantity: (id) => {
    const cart = get().cart;
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    set({ cart: updatedCart });
  },

  setCart: (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    set({ cart: newCart });
  },

  clearCart: () => {
    localStorage.setItem("cart", JSON.stringify([]));
    set({ cart: [] });
  },
}));

export default useCart;

// import { create } from "zustand";

// const getCartFromLocalStorage = () => {
//   const storedCart = localStorage.getItem("cart");
//   return storedCart ? JSON.parse(storedCart) : [];
// };

// const useCart = create((set, get) => ({
//   cart: getCartFromLocalStorage(),

//   increaseQuantity: (id) => {
//     const cart = get().cart;
//     const updatedCart = cart.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     set({ cart: updatedCart });
//   },

//   decreaseQuantity: (id) => {
//     const cart = get().cart;
//     const updatedCart = cart.map(item =>
//       item.id === id
//         ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//         : item
//     );
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     set({ cart: updatedCart });
//   },

//   setCart: (newCart) => {
//     localStorage.setItem("cart", JSON.stringify(newCart));
//     set({ cart: newCart });
//   }
// }));

// export default useCart;