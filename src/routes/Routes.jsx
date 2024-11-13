import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import { getRoom } from "../api/rooms";
import DashBoard from "../layouts/DashBoard";
import AddRoom from "../pages/DAshboard/Host/AddRoom";
import MyListings from "../pages/DAshboard/Host/MyListings";
import HostRoutes from "./HostRoutes";
import ManagesUser from "../pages/DAshboard/Admin/ManagesUser";
import Profile from "../pages/DAshboard/Common/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoutes>
            <RoomDetails></RoomDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "add-room",
        element: (
          <PrivateRoutes>
            <HostRoutes>
              <AddRoom></AddRoom>
            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-listings",
        element: (
          <PrivateRoutes>
            <HostRoutes>
              <MyListings></MyListings>
            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-users",
        element: <ManagesUser></ManagesUser>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
