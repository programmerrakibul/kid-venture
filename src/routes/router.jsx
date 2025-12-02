import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import MyProfile from "../pages/MyProfile/MyProfile";
import ExploreToys from "../pages/ExploreToys/ExploreToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Offers from "../pages/Offers/Offers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "toy-details/:id",
        element: (
          <ProtectedRoute>
            <ToyDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "explore-toys",
        element: <ExploreToys />,
      },

      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "reset-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
