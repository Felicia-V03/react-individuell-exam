import useCart from "../../stores/useCartStore";
import "./orderCounter.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

function OrderCounter({ event }) {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  const existingItem = cart.find(item => item.id === event.id);
  const quantity = existingItem ? existingItem.quantity : 0;

  return (
    <section className="order-counter_buttons">
      <button
        onClick={() => decreaseQuantity(event.id)}
        className={`order-decrease_button id-${event.id}`}
        disabled={quantity <= 1}
      >
        <i className="las la-minus"></i>
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => increaseQuantity(event.id)}
        className={`order-increase_button id-${event.id}`}
      >
        <i className="las la-plus"></i>
      </button>
    </section>
  );
}

export default OrderCounter;
