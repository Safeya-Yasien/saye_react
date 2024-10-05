import {
  About,
  Contact,
  Donate,
  Error,
  Home,
  JoinUs,
  Login,
  Register,
  VolunteerOpportunity,
} from "@/pages";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/volunteer-opportunity",
        element: <VolunteerOpportunity />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/join-us",
        element: <JoinUs />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
