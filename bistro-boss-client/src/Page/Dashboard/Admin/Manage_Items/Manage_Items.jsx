import { useQuery } from "@tanstack/react-query";
import Title from "../../../../Components/Title/Title";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Manage_Items = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
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
          <Title title={"MANAGE ALL ITEMS"} subTitle={"Hurry Up!"}></Title>
        </div>
        <div className="flex items-center justify-between mx-36 font-cinzel font-bold">
          <div>
            <h2 className="text-3xl">Total Items: {menu.length}</h2>
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
                  <th className="py-5 text-center">Update</th>
                  <th className="py-5 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, idx) => (
                  <tr className="border text-lg border-gray-300" key={item._id}>
                    <th className="font-semibold text-center">{idx + 1}</th>
                    <td className="font-semibold">
                      {" "}
                      <img
                        className="size-24 rounded-full"
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td className="font-semibold">{item.name}</td>
                    <td className="font-bold ">${item.price}</td>
                    <td className="font-semibold text-center">
                      <Link to={`/dashboard/update-items/${item._id}`}>
                        <button className="bg-[#D1A054] p-4 rounded-md">
                          <FiEdit className="size-6 text-white" />
                        </button>
                      </Link>
                    </td>
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

export default Manage_Items;
