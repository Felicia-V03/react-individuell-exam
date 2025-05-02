import "./orderCounter.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

function OrderCounter({ event }) {

  
  if (!event) {
    return console.log("Event data is not available.");
  }
  return (
    <section className="order-counter">
      <section className="order-counter_container">
        <section className="order-counter_header">
          <h2 className="order-counter_total">{event.price} sek</h2>
        </section>
        <section className="order-counter_buttons">
          <button className="order-decrease_button">
            <i className="las la-minus"></i>  
          </button>        
          <p></p>
          <button className="order-increase_button">
            <i className="las la-plus"></i>
          </button>
        </section>
      </section>
    </section>
  );
}

export default OrderCounter;