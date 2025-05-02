import { useNavigate, useParams } from "react-router-dom";
import "./cartButton.css";

function CartButton({children}) {
  const Navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => {
    if (id) {
      Navigate("/orders");
    } else {
      Navigate("/ticket");
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