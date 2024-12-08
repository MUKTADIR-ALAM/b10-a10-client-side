import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCampaign from "../pages/AddCampaign";
import Campaigns from "../pages/Campaigns";
import CampaignDetails from "../pages/CampaignDetails";
import MyCampaigns from "../pages/MyCampaigns";
import MyDonation from "../pages/MyDonation";
import UpdateCampaign from "../pages/UpdateCampaign";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
        // loader: () => fetch(`https://crowdcube-server-nine.vercel.app/campaigns`),
      },
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign />
          </PrivateRoute>
        ),
        // loader: ({params})=>fetch(`https://crowdcube-server-nine.vercel.app/campaignDetails/${params.id}`),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoute>
            <MyDonation />
          </PrivateRoute>
        ),
        // loader: () => fetch(`https://crowdcube-server-nine.vercel.app/donate`),
      },
      {
        path: "/myCampaigns/:email",
        element: (
          <PrivateRoute>
            <MyCampaigns />
          </PrivateRoute>
        ),
        // loader: ({params}) => fetch(`https://crowdcube-server-nine.vercel.app/myCampaigns/${params.email}`),
      },
      {
        path: "/campaignDetails/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>
        ),
        // loader: ({params})=>fetch(`https://crowdcube-server-nine.vercel.app/campaignDetails/${params.id}`),
      },
    ],
  },
]);
