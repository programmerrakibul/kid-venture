import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import MyProfile from "../pages/MyProfile/MyProfile";
import ExploreToys from "../pages/ExploreToys/ExploreToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

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
    ],
  },
]);

export default router;
