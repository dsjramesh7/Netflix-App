import React from "react";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/about",
      element: <Browse />,
    },
    {
      path: "/contact",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
