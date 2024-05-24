import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import "./navbar.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../../AuthProvider/useAuth";
const Navbar = () => {
  const {user,loading}=useAuth();
  console.log(loading);
 
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="md:px-12 px-6 md:bg-[#15151550] bg-slate-900 md:fixed w-full z-10 text-white">
      <div className="h-[10vh] py-8 flex items-center justify-between">
        <div className="font-cinzel cursor-pointer">
          <h2 className="font-extrabold md:text-3xl">BISTRO BOSS</h2>
          <h2 className="font-bold md:text-xl spacing">RESTAURANT</h2>
        </div>
        <div className="font-inter text-lg font-semibold">
          <div className="flex items-center gap-4">
            <ul className="hidden lg:flex items-center gap-6">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#EEFF25]" : ""
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-[#EEFF25]" : ""
                  }
                >
                  CONTACT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-[#EEFF25]" : ""
                  }
                >
                  DASHBOARD
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-menu"
                  className={({ isActive }) =>
                    isActive ? "text-[#EEFF25]" : ""
                  }
                >
                  OUR MENU
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-shop"
                  className={({ isActive }) =>
                    isActive ? "text-[#EEFF25]" : ""
                  }
                >
                  OUR SHOP
                </NavLink>
              </li>
            </ul>
            <div className="p-2 bg-[#006837] cursor-pointer rounded-full">
              <BsCart4 className="md:size-6 text-white" />
            </div>
            
            <div
              onClick={handleToggle}
              className="p-2  lg:hidden cursor-pointer rounded-full"
            >
              {clicked ? <HiOutlineMenu /> : <AiFillCloseSquare />}
            </div>
            <div className="hidden lg:flex">
              {user ? (
                <div className="flex items-center gap-4">
                  <Link to="/login">SIGN OUT</Link>
                  <div className="w-10">
                    <img
                      className="rounded-full cursor-pointer transition hover:scale-95"
                      src={user.photoURL}
                      alt={"displayName"}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h2>SIGN IN</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {!clicked ? <div className="md:hidden flex flex-col gap-2 py-4 items-center font-inter">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/contact" >CONTACT US</NavLink>
              <NavLink to="/">DASHBOARD</NavLink>
              <NavLink to="/">OUR MENU</NavLink>
              <NavLink to="/">OUR SHOP</NavLink>
              {
                user? <NavLink to="/">SIGN OUT </NavLink> : <NavLink to="/">SIGN UP</NavLink>
              }
            </div> : ""}
    </nav>
  );
};

export default Navbar;
