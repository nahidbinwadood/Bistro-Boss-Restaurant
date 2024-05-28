import { useQuery } from "@tanstack/react-query";
import Title from "../../../../Components/Title/Title";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const All_Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:  "Yes make him admin"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${item._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} is now an Admin !`,
              icon: "success",
            });
           
          }
        });
      }
    });
  };
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
            <h2 className="text-3xl">Total Users: {users.length}</h2>
          </div>
        </div>
        <div className="mx-36 my-12">
          <div className="overflow-x-auto ">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="text-white text-lg font-inter bg-[#D1A054]">
                  <th className="py-5 font-semibold "></th>
                  <th className="py-5">Name</th>
                  <th className="py-5">Email </th>
                  <th className="py-5">Role </th>
                  <th className="py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, idx) => (
                  <tr className="border text-lg border-gray-300" key={item._id}>
                    <th className="font-semibold">{idx + 1}</th>
                    <td className="font-semibold">{item.name}</td>
                    <td className="font-semibold ">{item.email}</td>
                    <td>
                      {item.role == "admin" ? (
                        (<div className="btn">Admin</div>)
                      ) : (
                        <button onClick={() => handleMakeAdmin(item)}>
                          <div className="bg-[#D1A054] p-4 rounded-md">
                            <FaUsers className="size-6 text-white" />
                          </div>
                        </button>
                      )}
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

export default All_Users;
