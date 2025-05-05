import { useNavigate, useParams, useLocation } from "react-router-dom";
import useCart from "../../stores/useCartStore.js";
import useCounter from "../../stores/useCounter.js";
import "./cartButton.css";

function CartButton({children, event}) {
  const location = useLocation();
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const { reset, count } = useCounter();

  const handleClick = () => {
    if (!event) return;

    if (id) {
      navigate("/orders");
      addToCart({ ...event, count }); // Lägg till i varukorgen
      reset();   
    } else if (location.pathname === "/orders") {
      navigate("/ticket");
      clearCart(); // Rensa varukorgen
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