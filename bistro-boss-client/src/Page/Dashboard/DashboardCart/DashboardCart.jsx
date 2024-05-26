import Title from "../../../Components/Title/Title";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const DashboardCart = () => {
  const [cart, refetch] = useCart();
  const axioSecure = useAxiosSecure();
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  console.log(totalPrice);
  const handleDelete = (id) => {
    console.log("delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axioSecure.delete(`/cart/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
          
        });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="-mt-20">
          <Title title={"MY BOOKINGS"} subTitle={"Excellent Ambience"}></Title>
        </div>
        <div className="flex items-center justify-between mx-36 font-cinzel font-bold">
          <div>
            <h2 className="text-3xl">Total Orders: {cart.length}</h2>
          </div>
          <div>
            <h2 className="text-3xl">Total Price : $ {totalPrice}</h2>
          </div>
          <div>
            <button className="py-3 px-4 text-lg text-white rounded-md bg-[#D1A054]">
              Pay
            </button>
          </div>
        </div>
        <div className="mx-36 my-12">
          <div className="overflow-x-auto ">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="text-white text-lg font-inter bg-[#D1A054]">
                  <th className="py-5 font-semibold "></th>
                  <th className="py-5">Item Image</th>
                  <th className="py-5">Item Name </th>
                  <th className="py-5">Price </th>
                  <th className="py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr className="border text-lg border-gray-300" key={item._id}>
                    <th className="font-semibold">{idx + 1}</th>
                    <td className="font-semibold">
                      <img className="size-16" src={item.image} alt="" />
                    </td>
                    <td className="font-semibold ">{item.name}</td>
                    <td className="font-semibold">${item.price}</td>
                    <td className="font-semibold text-center">
                      <button onClick={() => handleDelete(item._id)}>
                        <div className="bg-[#B91C1C] p-4 rounded-md">
                          <RiDeleteBin6Line className="size-6 text-white" />
                        </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCart;
