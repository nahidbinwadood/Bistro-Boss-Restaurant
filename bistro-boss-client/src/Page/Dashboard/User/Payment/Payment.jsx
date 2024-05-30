import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../AuthProvider/useAuth";
import Title from "../../../../Components/Title/Title";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

 
const Payment = () => {
    const {user}=useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = []} = useQuery({
      queryKey: ["payments",user.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payment/${user.email}`);
        return res.data;
      },
    });
    return (
        <div>
      <div>
        <div className="-mt-20">
          <Title title={"PAYMENT HISTORY"} subTitle={"At a Glance!"}></Title>
        </div>
        <div className="flex items-center justify-between mx-36 font-cinzel font-bold">
          <div>
            <h2 className="text-3xl">Total Payments: {payments.length}</h2>
          </div>
        </div>
        <div className="mx-36 my-12">
          <div className="overflow-x-auto ">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="text-white text-lg font-inter bg-[#D1A054]">
                  <th className="py-5 font-semibold "></th>
                  <th className="py-5">Email</th>
                  <th className="py-5">Total Price </th>
                  <th className="py-5">Date</th>
                  <th className="py-5">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((item, idx) => (
                  <tr className="border text-lg border-gray-300" key={item._id}>
                    <th className="font-semibold">{idx + 1}</th>
                    <td className="font-semibold">{item.email}</td>
                    <td className="font-semibold ">${item.price}</td>                  
                    <td className="font-semibold ">{item.date}</td>                  
                    <td className="font-semibold ">{item.status}</td>                  
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

export default Payment;