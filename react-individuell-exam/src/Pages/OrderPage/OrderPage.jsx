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
              <ol key={event.id} className="order-list__item">
                <article className="order-list__name-place">
                  <h2 className="order-list__title">{event.name}</h2>
                  <p className="order-list__place">{event.when.date} kl {event.when.from} - {event.when.to}</p>
                </article>
                <p className="order-list__price">{event.price} sek</p>
                <p className="order-list__quantity">Antal: {event.quantity}</p>
              </ol>
            ))}
          </ul>
        </section>
      )}
      <h2 className="order-list text">Totalt värde på order</h2>
      <p className="order-list__total">{totalPrice} sek</p>
      <CartButton>Skicka order</CartButton>
    </div>
  );
}

export default OrderPage;
