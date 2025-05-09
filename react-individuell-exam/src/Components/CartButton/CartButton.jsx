import { useNavigate, useLocation } from "react-router-dom";
import useCart from "../../stores/useCartStore.js";
import useCounter from "../../stores/useCounter.js";
import useTickets from "../../stores/useTickets.js";
import "./cartButton.css";

function CartButton({ children, event }) {
  const location = useLocation();
  const navigate = useNavigate();

  const addToCart = useCart((state) => state.addToCart);
  const clearCart = useCart((state) => state.clearCart);
  const updateItemQuantity = useCart((state) => state.updateItemQuantity);
  const cart = useCart((state) => state.cart || []);
    const { reset, quantity } = useCounter();
  const { saveTickets } = useTickets();

  const handleClick = () => {
    if (event) {
      const qty = quantity[event.id] || 1;
      const existingItem = cart.find((item) => item.id === event.id);
      if (existingItem) {
        // If item already exists in cart, update its quantity
        updateItemQuantity(event.id, qty);
      } else {
        // If item doesn't exist, add it to the cart
        addToCart({ ...event, quantity: qty });
      }
      navigate("/orders");
    } else if (location.pathname === "/orders") {
      if (Array.isArray(cart) && cart.length > 0) {
        saveTickets(cart);
        clearCart();
        cart.forEach((item) => {
          reset(item.id); // Reset quantity for each item in the cart
        });
      }
      navigate("/ticket");
    } else {
      console.warn("Unhandled path:", location.pathname);
    }
  };
  

  return (
    <div className="cart-button">
      <button onClick={handleClick} className="cart-button__btn">
        {children}
      </button>
    </div>
  );
}

export default CartButton;