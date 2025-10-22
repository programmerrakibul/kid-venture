import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import MyProfile from "../pages/MyProfile/MyProfile";
import ExploreToys from "../pages/ExploreToys/ExploreToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "my-profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "toy-details/:name",
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
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
