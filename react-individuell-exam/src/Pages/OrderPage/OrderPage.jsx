import CartButton from "../../Components/CartButton/CartButton";
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

      {cart.length === 0 ? (
        <p>Varukorgen är tom.</p>
      ) : (
        <section className="order-list">
          <ul className="order-list__items">
            {cart.map((event) => (
              <li key={event.id} className="order-list__item">
                <h2 className="order-list__title">{event.name}</h2>
                <p className="order-list__price">{event.price} sek</p>
                <p className="order-list__quantity">Antal: {event.quantity}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
      <h2 className="order-list__total">Totalt: {totalPrice} sek</h2>
      <CartButton>Skicka order</CartButton>
    </div>
  );
}

export default OrderPage;
