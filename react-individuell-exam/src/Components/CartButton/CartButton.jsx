import { useNavigate, useParams, useLocation } from "react-router-dom";
import useCart from "../../stores/useCartStore.js";
import useCounter from "../../stores/useCounter.js";
import "./cartButton.css";

function CartButton({children, event}) {
  const Location = useLocation();
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const { reset, quantity } = useCounter();

  const handleClick = () => {
    if (event && id) {
      addToCart({ ...event, quantity: quantity });
      reset();
      navigate("/orders");
    } else if (Location.pathname === "/orders") {
      navigate("/ticket");
      clearCart();
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