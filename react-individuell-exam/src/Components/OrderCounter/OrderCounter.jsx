import useCounter from "../../stores/useCounter.js";
import "./orderCounter.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

function OrderCounter({ event }) {
  const { count, increase, decrease } = useCounter();

  if (!event) return null;

  return (
    <section className="order-counter">
      <section className="order-counter_container">
        <section className="order-counter_header">
          <h2 className="order-counter_total">{event.price * count} sek</h2>
        </section>
        <section className="order-counter_buttons">
          <button onClick={decrease} className="order-decrease_button">
            <i className="las la-minus"></i>  
          </button>        
          <p>{count}</p>
          <button onClick={increase} className="order-increase_button">
            <i className="las la-plus"></i>
          </button>
        </section>
      </section>
    </section>
  );
}

export default OrderCounter;