import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import "./navbar.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [user, setUser] = useState(true);
  console.log(setUser);
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
                  <h2>SIGN OUT</h2>
                  <div className="w-10">
                    <img
                      className="rounded-full cursor-pointer transition hover:scale-95"
                      src={
                        "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/439011287_2066347377098548_8157686076250003447_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoPHVS4MuUjKpaqCTRTXs49jcT3sWeuaL2NxPexZ65ouVvTeRM_qclM__aZCXcZCV-WlHLC1H49ESy2oFGMoYx&_nc_ohc=AV7OUhSGzOoQ7kNvgFrJV_p&_nc_ht=scontent.fdac5-1.fna&oh=00_AYBe6yjJQxuGcl_CPVxSJQf77puCUQ7WMziBD_-k9XipVA&oe=664C458B"
                      }
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
