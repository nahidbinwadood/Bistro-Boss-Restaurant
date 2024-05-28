import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import "./navbar.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../../AuthProvider/useAuth";
import profileImg from "../../assets/home/Microsoft_Account_Logo.svg"
import useCart from "../../Hooks/useCart";
const Navbar = () => {
  const {user,logOut}=useAuth();
  const [clicked, setClicked] = useState(false);
  const [cart]=useCart();
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
                  to="/dashboard/admin-home"
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
                  to="/our-shop/salad"
                  className={({ isActive }) =>
                    isActive ? "text-[#EEFF25]" : ""
                  }
                >
                  OUR SHOP
                </NavLink>
              </li>
            </ul>
            <Link to="/dashboard/cart" className="p-2 bg-[#006837] relative cursor-pointer rounded-full">
              <BsCart4 className="md:size-8 text-white" />
              <h2 className="absolute -bottom-2 -right-1 font-inter rounded-full px-2 py-1 text-sm font-bold bg-[#FF0000] text-black">{cart.length}</h2>
            </Link>
            
            <div
              onClick={handleToggle}
              className="p-2  lg:hidden cursor-pointer rounded-full"
            >
              {clicked ? <HiOutlineMenu /> : <AiFillCloseSquare />}
            </div>
            <div className="hidden lg:flex">
              {user?.email ? (
                <div className="flex items-center gap-4">
                  <button onClick={logOut}>SIGN OUT</button>
                  <div className="w-10">
                    <img title={user.displayName}
                      className="rounded-full cursor-pointer transition hover:scale-95"
                      src={user.photoURL ? user.photoURL : profileImg}
                      alt={"displayName"}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <Link className="hover:text-[#EEFF25]" to="/login">SIGN IN</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {!clicked ? <div className="md:hidden flex flex-col gap-2 py-4 items-center font-inter">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/contact" >CONTACT US</NavLink>
              <NavLink to="/dashboard">DASHBOARD</NavLink>
              <NavLink to="/our-menu">OUR MENU</NavLink>
              <NavLink to="/our-shop">OUR SHOP</NavLink>
              {
                user? <NavLink to="/">SIGN OUT </NavLink> : <NavLink to="/">SIGN UP</NavLink>
              }
            </div> : ""}
    </nav>
  );
};

export default Navbar;
