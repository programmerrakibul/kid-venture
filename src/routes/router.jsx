import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import MyProfile from "../pages/MyProfile/MyProfile";
import ExploreToys from "../pages/ExploreToys/ExploreToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";

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
        element: <MyProfile />,
      },
      {
        path: "explore-toys",
        element: <ExploreToys />,
      },
      {
        path: "toy-details/:name",
        element: <ToyDetails />,
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
