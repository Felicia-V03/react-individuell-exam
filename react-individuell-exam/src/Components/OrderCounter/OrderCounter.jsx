import useCounter from "../../stores/useCounter.js";
import "./orderCounter.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

function OrderCounter({ event }) {
  const { count, increase, decrease } = useCounter();

  // localStorage.setItem("EventId", event.id);

  // const eventsinfo = {
  //   id: event.id,
  //   name: event.name,
  //   place: event.place,
  //   when: {
  //     date: event.when.date,
  //     from: event.when.from,
  //     to: event.when.to,
  //   },
  //   where: event.where,
  //   price: event.price,
  //   qauilty: count,
  // };

  // localStorage.setItem("Chosen", eventsinfo);
  
  if (!event) {
    return console.log("Event data is not available.");
  }
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