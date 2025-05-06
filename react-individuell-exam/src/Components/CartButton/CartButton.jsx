import { useNavigate, useParams, useLocation } from "react-router-dom";
import useCart from "../../stores/useCartStore.js";
import useCounter from "../../stores/useCounter.js";
import useTickets from "../../stores/useTickets.js";
import "./cartButton.css";

function CartButton({children, event}) {
  const location = useLocation();  
  const navigate = useNavigate();
  const { id } = useParams();

  const { addToCart, clearCart, cart } = useCart();
  const { reset, quantity } = useCounter();
  const { saveTickets } = useTickets();

  const handleClick = () => {
    if (event && id) {
      addToCart({ ...event, quantity: quantity });
      reset();
      navigate("/orders");
    } else if (location.pathname === "/orders") {
      navigate("/ticket");
      if (cart.length > 0) {
        saveTickets(cart);
        clearCart();
      }
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