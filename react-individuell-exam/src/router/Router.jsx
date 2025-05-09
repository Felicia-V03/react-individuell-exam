import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import EventsPage from "../Pages/EventsPage/EventsPage";
import EventDetailsPage from "../Pages/EventDetailsPage/EventDetailsPage";
import OrderPage from "../Pages/OrderPage/OrderPage";
import TicketPage from "../Pages/TicketPage/TicketPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

//router for all pages
const Router = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <HomePage />,
      errorElement : <ErrorPage />,
    },
    {
      path: "/events",
      element: <EventsPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/event/:id",
      element: <EventDetailsPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/orders",
      element: <OrderPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/ticket",
      element: <TicketPage />,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default Router;