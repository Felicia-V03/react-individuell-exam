import OrderCounter from "../OrderCounter/OrderCounter";
import useCart from "../../stores/useCartStore.js";

function EventsOrder() {
  const { cart } = useCart();

  return (
    <section className="order-list">
      {cart.length === 0 ? (
        <p>Varukorgen är tom.</p>
      ) : (
        <ul className="order-listitems">
        {cart.map((event) => (
          <ol key={event.id} className="order-listitem__{event.id}">
            <article className="order-listinfo">
              <h2 className="order-listtitle">{event.name}</h2>
              <p className="order-listwhen">{event.when.date} kl {event.when.from} - {event.when.to}</p>
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