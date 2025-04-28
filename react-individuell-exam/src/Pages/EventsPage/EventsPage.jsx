// import { useFetch } from "../../Hooks/useFetch.js";
// import { useEffect, usestate } from "react";

// function EventsPage() {
//   const { data: events } = useFetch("https://santosnr6.github.io/Data/events.json");

//   useEffect(() => {
//     if (events) {
//       console.log("Fetched events:", events);
//     }
//   }
//   , [events]);

//   return (
//     <div>
//       <h1>Events Page</h1>
//       <p>This is the events page.</p>
//     </div>
//   );
// }

// export default EventsPage;

import { useFetch } from "../../Hooks/useFetch";

function EventsPage() {
  const { data: eventsData, isLoading, isError } = useFetch("https://santosnr6.github.io/Data/events.json");
  const events = eventsData?.events || [];

  console.log("Fetched events:", events);
  
  if (isLoading) return <p>Laddar event...</p>;
  if (isError) return <p>Ett fel uppstod vid hämtning av event.</p>;


  return (
    <div>
      <h1>Events Page</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
