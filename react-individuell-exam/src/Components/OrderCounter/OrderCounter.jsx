import useCounter from "../../stores/useCounter.js";
import useCart from "../../stores/useCartStore";
import "./orderCounter.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

function OrderCounter({ event }) {
  const { quantity, increase, decrease } = useCounter();
  const { cart } = useCart();

  const existingEventInCart = cart.find(item => item.id === event?.id);
  const totalQuantity = quantity + (existingEventInCart ? existingEventInCart.quantity : 0);

  if (!event) return null;

  return (
    <section className="order-counter">
      <section className="order-counter_container">
        <section className="order-counter_header">
          <h2 className="order-counter_total">{event.price * totalQuantity} sek</h2>
        </section>
        <section className="order-counter_buttons">
          <button onClick={decrease} className="order-decrease_button">
            <i className="las la-minus"></i>  
          </button>        
          <p>{totalQuantity}</p>
          <button onClick={increase} className="order-increase_button">
            <i className="las la-plus"></i>
          </button>
        </section>
      </section>
    </section>
  );
}

export default OrderCounter;
