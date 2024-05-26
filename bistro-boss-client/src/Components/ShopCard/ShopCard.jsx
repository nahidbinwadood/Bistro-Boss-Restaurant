import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../AuthProvider/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

// eslint-disable-next-line react/prop-types
const ShopCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, recipe, price } = data;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch]=useCart()
  const handleCart = () => {
    if (user?.email) {
      const cart = {
        email: user.email,
        // eslint-disable-next-line react/prop-types
        menuId: data._id,
        name,
        image,
        recipe,
        price,
      };
      axiosSecure.post(`/cart`, cart).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`${name} has been saved in your cart !`);
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You're not Logged In !",
        text: "Please Login !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card relative font-inter  bg-base-100 shadow-xl pb-8">
        <div className="absolute top-4 right-4">
          <h2 className="bg-[#111827] px-5 py-2 font-inter text-white">
            ${price}
          </h2>
        </div>
        <figure>
          <img
            className="h-80 w-full object-cover object-center"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className=" pt-6 text-center space-y-4">
          <h2 className="font-semibold text-xl md:text-2xl">{name}</h2>
          <p className="md:text-lg h-28 w-3/4 mx-auto">{recipe}</p>
          <div className="">
            <button
              onClick={handleCart}
              className="text-[#BB8506] px-5 py-2 md:px-8 md:py-4 rounded-xl outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-[#BB8506] md:text-xl hover:bg-[#1F2937] transition hover:border-b-[#1F2937]"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
