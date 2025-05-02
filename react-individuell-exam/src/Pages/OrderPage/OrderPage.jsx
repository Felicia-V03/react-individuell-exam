import CartButton from "../../Components/CartButton/CartButton";
import "./orderPage.css";

function OrderPage() {
  return (
    <div className="order-page page-container">
      <h1 className="page_title">Order</h1>
      <p className="page_sub">Totalt värde på order</p>
      <h2 className="order_total">1000 SEK</h2>
      <CartButton>Skicka order</CartButton>
    </div>
  );
}

export default OrderPage;