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
  const cart = useCart((state) => state.cart || []);
    const { reset, quantity } = useCounter();
  const { saveTickets } = useTickets();

  const handleClick = () => {
    if (event) {
      addToCart({ ...event, quantity: quantity });
      reset();
      navigate("/orders");
    } else if (location.pathname === "/orders") {
      if (Array.isArray(cart) && cart.length > 0) {
        saveTickets(cart);
        clearCart();
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