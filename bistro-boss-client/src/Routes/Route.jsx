import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Page/Homepage/Home/Home";
import OurMenu from "../Page/Our_Menu/OurMenu";
import Our_Shop from "../Page/Our_Shop/Our_Shop";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import DashboardCart from "../Page/Dashboard/DashboardCart/DashboardCart";
import Dashboard from "../Layouts/DashBoard";
import PrivateRoutes from "./PrivateRoutes";
import All_Users from "../Page/Dashboard/Admin/All_Users/All_Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/our-shop/:category",
        element: <Our_Shop></Our_Shop>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <DashboardCart></DashboardCart>,
      },

      //Admin 
      {
        path: "all-users",
        element: <All_Users></All_Users>,
      },
    ],
  },
]);
