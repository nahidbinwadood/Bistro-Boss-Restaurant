import Title from "../../../Components/Title/Title";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
const DashboardCart = () => {
  const [offered, setOffered] = useState([]);
  console.log(offered);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setOffered(data);
      });
  }, []);

  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <div>
      <div>
        <div>
          <Title title={"MY BOOKINGS"} subTitle={"Excellent Ambience"}></Title>
        </div>
        <div className="flex items-center justify-between mx-36 font-cinzel font-bold">
          <div>
            <h2 className="text-3xl">Total Orders: 6</h2>
          </div>
          <div>
            <h2 className="text-3xl">Total Price : $ 530</h2>
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
                  <th className="py-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {offered.map((post, idx) => (
                  <tr className="border border-gray-300" key={post._id}>
                    <th className="font-semibold">{idx + 1}</th>
                    <td className="font-semibold">{post.image}</td>
                    <td className="font-semibold">{post.name}</td>
                    <td className="font-semibold">{post.price}</td>
                    <td className="font-semibold">
                      <button onClick={() => handleDelete(post._id)}>
                        <MdDelete className="size-6" />
                      </button>
                    </td>

                    <td></td>
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
