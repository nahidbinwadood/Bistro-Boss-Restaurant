import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import review from "../../../assets/dashboard/review.png";
import moneybag from "../../../assets/dashboard/moneybag.png";
import bookings from "../../../assets/dashboard/online-booking 1.png";
import { IoMenu } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";
import Title from "../../../Components/Title/Title";

const DashboardHome = () => {
    const location=useLocation();
    const here=location.pathname;
  return (
    <div className="h-[100vh] grid grid-cols-12">
      {/* Sidebar */}
      <div className="col-span-2 bg-[#D1A054] py-12">
        <div className="font-cinzel cursor-pointer  px-12 mb-16">
          <h2 className="font-extrabold md:text-3xl">BISTRO BOSS</h2>
          <h2 className="font-bold md:text-xl spacing">RESTAURANT</h2>
        </div>
        <div className="font-cinzel  px-12 space-y-6">
          <NavLink to="/dashboard/home" className={({ isActive }) =>
                    isActive ? "text-[#FFF] flex gap-3 items-center" : " flex gap-3 items-center"
                  }   >
            <AiFillHome className={here == "/dashboard/home" ? "text-white size-7" :"size-7 text-black"} />
            <h2 className="font-bold text-xl uppercase">User Home</h2>
          </NavLink>
          <div className="flex gap-3 items-center ">
            <FaCalendarAlt className="size-7 text-black" />
            <h2 className="font-bold text-lg uppercase">Reservation</h2>
          </div>
          <div className="flex gap-3 items-center ">
            <img src={moneybag} className="size-7 text-black" />
            <h2 className="font-bold text-lg uppercase">payment history</h2>
          </div>
          <NavLink to="/dashboard/cart"  className={({ isActive }) =>
                    isActive ? "text-[#FFF] flex gap-3 items-center" : " flex gap-3 items-center"
                  }>
            <IoMdCart className={here == "/dashboard/cart" ? "text-white size-7" :"size-7 text-black"}  />
            <h2 className="font-bold text-lg uppercase">My Cart</h2>
          </NavLink>
          <div className="flex gap-3 items-center ">
            <img src={review} className="size-7 text-black" />
            <h2 className="font-bold text-lg uppercase">add review</h2>
          </div>
          <div className="flex gap-3 items-center ">
            <img src={bookings} className="size-7 text-black" />
            <h2 className="font-bold text-lg uppercase">my booking</h2>
          </div>
        </div>
        <div className="border-t-2 my-8 mx-7 border-t-white"></div>
        <div className="font-cinzel  px-12 space-y-6">
          <Link to="/" className="flex gap-3 items-center ">
            <AiFillHome className="size-7 text-black" />
            <h2 className="font-bold text-xl uppercase">Home</h2>
          </Link>
          <div className="flex gap-3 items-center ">
            <IoMenu className="size-7 text-black" />
            <h2 className="font-bold text-xl uppercase">Menu</h2>
          </div>
          <div className="flex gap-3 items-center ">
            <GiShoppingBag className="size-7 text-black" />
            <h2 className="font-bold text-xl uppercase">Shop</h2>
          </div>
          <div className="flex gap-3 items-center ">
            <MdEmail className="size-7 text-black" />
            <h2 className="font-bold text-xl uppercase">Contact</h2>
          </div>
        </div>
      </div>
      <div className="col-span-10 w-full">
        <div>
          <Title title={"MY Home"} subTitle={"Excellent Ambience"}></Title>
        </div>
      </div>

      {/* Display */}
    </div>
  );
};

export default DashboardHome;
