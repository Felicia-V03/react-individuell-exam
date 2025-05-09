import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useTickets from "../../stores/useTickets";
import Tickets from "../Tickets/Tickets";

function TicketsCarousel() {
  const { tickets } = useTickets();

  useEffect(() => {
    console.log(tickets);
  }, [tickets]);

  return (
    <div className="tickets-carousel">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={Navigation}
        className="tickets-list"
      >
        {Array.isArray(tickets) && tickets.length > 0 ? (
          tickets.map((event, index) => {
            return (
              <SwiperSlide key={`${event.id}-${index}`}>
                <Tickets event={event} seat={event.seat} />
              </SwiperSlide>
            );}
          )
        ) : (
          <p>Inga biljetter ännu.</p>
        )}
      </Swiper>
    </div>
  );
}

export default TicketsCarousel;
