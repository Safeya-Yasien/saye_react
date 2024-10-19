import {
  About,
  Contact,
  Donate,
  Error,
  Home,
  JoinUs,
  VolunteerOpportunity,
} from "@/pages";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Login,
  PasswordReset,
  Register,
  ResetPasswordRequest,
} from "@/pages/auth";

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
        path: "auth",
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "reset-password",
            element: <PasswordReset />,
          },
          {
            path: "reset-password-request",
            element: <ResetPasswordRequest />,
          },
        ],
      },
      {
        path: "volunteer-opportunity",
        element: <VolunteerOpportunity />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "joinus",
        element: <JoinUs />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
