import CartButton from "../../Components/CartButton/CartButton";
import EventsOrder from "../../Components/EventsOrder/EventsOrder";
import useCart from "../../stores/useCartStore.js";
import "./orderPage.css";

function OrderPage() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (sum, event) => sum + event.price * event.quantity,
    0
  );

  return (
    <div className="order-page page-container">
      <h1 className="page_title">Order</h1>
      <EventsOrder />
      <p className="page_sub">Totalt värde på order</p>
      <h2 className="order-total">{totalPrice} sek</h2>
      <CartButton>Skicka order</CartButton>
    </div>
  );
}

export default OrderPage;
