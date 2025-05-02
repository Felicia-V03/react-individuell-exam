// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import Router from "./router/Router";

function App() {
  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./Pages/HomePage/HomePage";
// import EventsPage from "./Pages/EventsPage/EventsPage";
// import EventDetailsPage from "./Pages/EventDetailsPage/EventDetailsPage";
// import OrderPage from "./Pages/OrderPage/OrderPage";
// import TicketPage from "./Pages/TicketPage/TicketPage";
// import ErrorPage from "./Pages/ErrorPage/ErrorPage";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <HomePage />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: "/events",
//       element: <EventsPage />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: "/event/:id",
//       element: <EventDetailsPage />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: "/orders",
//       element: <OrderPage />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: "/ticket",
//       element: <TicketPage />,
//       errorElement: <ErrorPage />,
//     }
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;