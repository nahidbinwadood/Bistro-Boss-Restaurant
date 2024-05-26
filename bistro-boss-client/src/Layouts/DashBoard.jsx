import { AiFillHome } from "react-icons/ai";
import { FaBook, FaCalendarAlt,FaUsers,FaUtensils } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import review from "../assets/dashboard/review.png";
import moneybag from "../assets/dashboard/moneybag.png";
import bookings from "../assets/dashboard/online-booking 1.png";
import { IoMenu } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  const from = location.pathname;

  const isAdmin = true;
  return (
    <div className="h-[100vh] grid grid-cols-12">
      <ScrollRestoration></ScrollRestoration>
      {/* Sidebar */}
      <div className="col-span-2 bg-[#D1A054] py-12">
        <div className="font-cinzel cursor-pointer  px-12 mb-16">
          <h2 className="font-extrabold md:text-3xl">BISTRO BOSS</h2>
          <h2 className="font-bold md:text-xl spacing">RESTAURANT</h2>
        </div>
        {isAdmin ? (

          // Admin Dashboard:

          <div className="font-cinzel  px-10 space-y-6">
            <NavLink
              to="/dashboard/admin-home"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <AiFillHome
                className={
                  from === "/dashboard/admin-home"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-xl uppercase">Admin Home</h2>
            </NavLink>
            <NavLink
              to="/dashboard/add-items"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <FaUtensils
                className={
                  from === "/dashboard/add-items"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">Add Items</h2>
            </NavLink>
            <NavLink
              to="/dashboard/manage-items"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <IoMenu
                className={
                  from === "/dashboard/manage-items"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">Manage Items</h2>
            </NavLink>
            <NavLink
              to="/dashboard/manage-bookings"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <FaBook
                className={
                  from === "/dashboard/manage-bookings"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">Manage Bookings</h2>
            </NavLink>
            <NavLink
              to="/dashboard/all-users"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <FaUsers
                className={
                  from === "/dashboard/all-users"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">All Users</h2>
            </NavLink>
          
          </div>
        ) :
        
        // User Dashboard
        (
          <div className="font-cinzel  px-12 space-y-6">
            <NavLink
              to="/dashboard/home"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <AiFillHome
                className={
                  from === "/dashboard/home"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-xl uppercase">User Home</h2>
            </NavLink>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <FaCalendarAlt
                className={
                  from === "/dashboard/reservation"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">Reservation</h2>
            </NavLink>
            <NavLink
              to="/dashboard/payment"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <img
                src={moneybag}
                className={
                  from === "/dashboard/payment"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">payment history</h2>
            </NavLink>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <IoMdCart
                className={
                  from === "/dashboard/cart"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">My Cart</h2>
            </NavLink>
            <NavLink
              to="/dashboard/review"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <img
                src={review}
                className={
                  from === "/dashboard/review"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">add review</h2>
            </NavLink>
            <NavLink
              to="/dashboard/booking"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFF] flex gap-3 items-center "
                  : "flex gap-3 items-center "
              }
            >
              <img
                src={bookings}
                className={
                  from === "/dashboard/booking"
                    ? "size-7 text-white "
                    : "size-7 text-black"
                }
              />
              <h2 className="font-bold text-lg uppercase">my booking</h2>
            </NavLink>
          </div>
        )}
        <div className="border-t-2 my-8 mx-7 border-t-white"></div>
        <div className="font-cinzel  px-12 space-y-6">
          <Link to="/" className="flex gap-3 items-center ">
            <AiFillHome className="size-7 text-black" />
            <h2 className="font-bold text-xl uppercase">Home</h2>
          </Link>
          <Link to="/our-menu" className="flex gap-3 items-center ">
            <IoMenu className="size-7 text-black" />
            <h2 className="font-bold text-xl uppercase">Menu</h2>
          </Link>
          <Link to="/our-shop/salad" className="flex gap-3 items-center ">
            <GiShoppingBag className="size-7 text-black" />
            <h2 className="font-bold text-xl uppercase">Shop</h2>
          </Link>
          <Link to="/contact" className="flex gap-3 items-center ">
            <MdEmail className="size-7 text-black" />
            <h2 className="font-bold text-xl uppercase">Contact</h2>
          </Link>
        </div>
      </div>
      <div className="col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
