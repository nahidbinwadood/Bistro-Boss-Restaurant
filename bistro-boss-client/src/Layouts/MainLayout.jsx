import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "./../Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <ScrollRestoration />
      {location.pathname == "/login" || location.pathname == "/sign-up" ? "" : <Navbar></Navbar>}
      <Outlet></Outlet>
      {location.pathname == "/login" || location.pathname == "/sign-up" ? "" :  <Footer></Footer>}
     
    </div>
  );
};

export default MainLayout;
