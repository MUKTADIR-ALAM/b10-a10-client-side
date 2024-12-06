import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCampaign from "../pages/AddCampaign";
import Campaigns from "../pages/Campaigns";
import CampaignDetails from "../pages/CampaignDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        element: <AddCampaign />,
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
        loader: () => fetch(`http://localhost:3000/campaigns`),
      },
      {
        path: "/campaignDetails/:id",
        element: <CampaignDetails/>,
        loader: ({params})=>fetch(`http://localhost:3000/campaignDetails/${params.id}`),
      },
    ],
  },
]);
