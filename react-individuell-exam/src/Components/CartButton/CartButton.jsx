import { useNavigate } from "react-router-dom";
import "./cartButton.css";

function CartButton() {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/orders");
  }

  return (
    <div className="cart-button">
      <button onClick={handleClick} className="cart-button__btn">Lägg i varkorgen</button>
    </div>
  );
}

export default CartButton;