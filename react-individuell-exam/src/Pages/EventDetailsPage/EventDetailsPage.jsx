import EventDetailed from "../../Components/EventDetailed/EventDetailed";
import CartButton from "../../Components/CartButton/CartButton";
import OrderCounter from "../../Components/OrderCounter/OrderCounter";
import useCounter from "../../stores/useCounter.js";
import useCart from "../../stores/useCartStore.js";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./eventDetailsPage.css";

function EventDetailsPage() {
  const { data: eventsData, isLoading, isError } = useFetch("https://santosnr6.github.io/Data/events.json");
  const { id } = useParams();
  const { quantity } = useCounter();

  const events = eventsData?.events || [];
  const event = events.find(event => String(event.id) === id);
  const count = quantity[event?.id] || 0;


  if (!event) return null;
  if (isLoading) return <p>Laddar event...</p>;
  if (isError) return <p>Ett fel uppstod vid hämtning av event.</p>;

  return (
    <div className="event-page page-container">
      <h1 className="page_title">Event</h1>
      <p className="event-page_sub page_sub">You are about to score some tickets to</p>
      <EventDetailed event={event}/>
      <section className="order-counter">
        <section className="order-counter_container">
          <section className="order-counter_header">
            <h2 className="order-counter_total">{event.price * count} sek</h2>
          </section>
          <OrderCounter event={event}/>
        </section>
      </section>
      <CartButton event={event}>Lägg i varukorgen</CartButton>
    </div>
  );
}

export default EventDetailsPage;