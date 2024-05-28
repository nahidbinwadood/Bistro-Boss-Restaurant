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
import AdminRoutes from "./AdminRoutes";
import Add_Items from "../Page/Dashboard/Admin/Add_Items/Add_Items";
import AdminHome from "../Page/Dashboard/Admin/AdminHome/AdminHome";
import Manage_Items from "../Page/Dashboard/Admin/Manage_Items/Manage_Items";
import Update_Items from "../Page/Dashboard/Admin/Update_Items/Update_Items";

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
        element: (
          <AdminRoutes>
            <All_Users></All_Users>
          </AdminRoutes>
        ),
      },
      {
        path: "admin-home",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoutes>
            <Add_Items></Add_Items>
          </AdminRoutes>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoutes>
            <Manage_Items></Manage_Items>
          </AdminRoutes>
        ),
      },
      {
        path: "update-items/:id",
        element: (
          <AdminRoutes>
             <Update_Items></Update_Items>
          </AdminRoutes>
        ),
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/menu/${params.id}`)
      },
    ],
  },
]);
