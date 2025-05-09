import OrderCounter from "../OrderCounter/OrderCounter";
import useCart from "../../stores/useCartStore.js";

function EventsOrder() {
  const { cart } = useCart();

  return (
    <section className="order-list">
      {cart.length === 0 ? (
        <p>Varukorgen är tom.</p>
      ) : (
        <ul className="order-list">
          {cart.map((event) => (
            <ol key={event.id} className="order-list__item">
              <article className="order-list__info">
                <h2 className="order-list__title">{event.name}</h2>
                <p className="order-list__when">{event.when.date} kl {event.when.from} - {event.when.to}</p>
              </article>
              <OrderCounter event={event}/>
            </ol>
          ))}
        </ul>
      )}
    </section>
  );
}

export default EventsOrder;