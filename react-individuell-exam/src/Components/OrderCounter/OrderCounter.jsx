import useCounter from "../../stores/useCounter";
import "./orderCounter.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

function OrderCounter({ event }) {
  const { quantity, increase, decrease } = useCounter();

  const count = quantity[event.id] || 0;

  return (
    <section className="order-counter_buttons">
      <button
        onClick={() => decrease(event.id)}
        className={`order-decrease_button id-${event.id}`}
        disabled={count <= 0}
      >
        <i className="las la-minus"></i>
      </button>
      <span className="order-counter_total">{count}</span>
      <button
        onClick={() => increase(event.id)}
        className={`order-increase_button id-${event.id}`}
      >
        <i className="las la-plus"></i>
      </button>
    </section>
  );
}


export default OrderCounter;
