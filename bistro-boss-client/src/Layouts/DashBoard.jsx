// import { AiFillHome } from "react-icons/ai";
// import { FaCalendarAlt } from "react-icons/fa";
// import { IoMdCart } from "react-icons/io";
// import review from "../assets/dashboard/review.png";
// import moneybag from "../assets/dashboard/moneybag.png";
// import bookings from "../assets/dashboard/online-booking 1.png";
// import { IoMenu } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { GiShoppingBag } from "react-icons/gi";
// import { Link, NavLink, Outlet } from "react-router-dom";
// const Dashboard = () => {
//   return (
//     <div className="h-[100vh] grid grid-cols-12">
//       {/* Sidebar */}
//       <div className="col-span-2 bg-[#D1A054] py-12">
//         <div className="font-cinzel cursor-pointer  px-12 mb-16">
//           <h2 className="font-extrabold md:text-3xl">BISTRO BOSS</h2>
//           <h2 className="font-bold md:text-xl spacing">RESTAURANT</h2>
//         </div>
//         <div className="font-cinzel  px-12 space-y-6">
//           <NavLink to="" className="flex gap-3 items-center ">
//             <AiFillHome className="size-7 text-black" />
//             <h2 className="font-bold text-xl uppercase">User Home</h2>
//           </NavLink>
//           <div className="flex gap-3 items-center ">
//             <FaCalendarAlt className="size-7 text-black" />
//             <h2 className="font-bold text-lg uppercase">Reservation</h2>
//           </div>
//           <div className="flex gap-3 items-center ">
//             <img src={moneybag} className="size-7 text-black" />
//             <h2 className="font-bold text-lg uppercase">payment history</h2>
//           </div>
//           <div className="flex gap-3 items-center ">
//             <IoMdCart className="size-7 text-black" />
//             <h2 className="font-bold text-lg uppercase">My Cart</h2>
//           </div>
//           <div className="flex gap-3 items-center ">
//             <img src={review} className="size-7 text-black" />
//             <h2 className="font-bold text-lg uppercase">add review</h2>
//           </div>
//           <div className="flex gap-3 items-center ">
//             <img src={bookings} className="size-7 text-black" />
//             <h2 className="font-bold text-lg uppercase">my booking</h2>
//           </div>
//         </div>
//         <div className="border-t-2 my-8 mx-7 border-t-white"></div>
//         <div className="font-cinzel  px-12 space-y-6">
//           <Link to="/" className="flex gap-3 items-center ">
//             <AiFillHome className="size-7 text-black" />
//             <h2 className="font-bold text-xl uppercase">Home</h2>
//           </Link>
//           <div className="flex gap-3 items-center ">
//             <IoMenu className="size-7 text-black" />
//             <h2 className="font-bold text-xl uppercase">Menu</h2>
//           </div>
//           <div className="flex gap-3 items-center ">
//             <GiShoppingBag className="size-7 text-black" />
//             <h2 className="font-bold text-xl uppercase">Shop</h2>
//           </div>
//           <div className="flex gap-3 items-center ">
//             <MdEmail className="size-7 text-black" />
//             <h2 className="font-bold text-xl uppercase">Contact</h2>
//           </div>
//         </div>
//       </div>
//       <div className="col-span-10">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
 

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>

                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;

