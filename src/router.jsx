import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewUser from "./pages/NewUser";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/new-user",
      element: <NewUser />,
   },
]);
