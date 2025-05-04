import { useNavigate, useParams, useLocation } from "react-router-dom";
import useCounter from "../../stores/useCounter.js";
import "./cartButton.css";

function CartButton({children}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { reset } = useCounter();

  const handleClick = () => {
    if (id) {
      navigate("/orders");
      reset();
      const eventsinfo = JSON.parse(localStorage.getItem("Chosen"));
      localStorage.setItem("In Cart", JSON.stringify(eventsinfo));
      localStorage.removeItem("Chosen");
      localStorage.removeItem("EventId");
    } else if (location.pathname === "/orders") {
      navigate("/ticket");
      
    } else if (location.pathname === "/ticket") {
      navigate("/orders");
      
    } else {
      return;
    }
  }

  return (
    <div className="cart-button">
      <button onClick={handleClick} className="cart-button__btn">
        {children}
      </button>
    </div>
  );
}

export default CartButton;