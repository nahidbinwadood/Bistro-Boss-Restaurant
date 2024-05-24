import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Page/Homepage/Home/Home";
import OurMenu from "../Page/Our_Menu/OurMenu";
import Our_Shop from "../Page/Our_Shop/Our_Shop";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";

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
        path: "/our-shop",
        element:<Our_Shop></Our_Shop>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/sign-up",
        element:<SignUp></SignUp>
      },
    ],
  },
]);
