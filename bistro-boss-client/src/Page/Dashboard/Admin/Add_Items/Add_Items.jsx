import { FaUtensils } from "react-icons/fa";
import Title from "../../../../Components/Title/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Add_Items = () => {
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const navigate=useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    const { name, category, price, recipe } = data;
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data.data.display_url);
    if (res.data.success) {
      const menuItem = {
        name,
        category,
        price: parseFloat(price),
        recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      toast.success(`${name} has been added in menu items !`);
      reset();
      navigate("/dashboard/manage-items")
      console.log(menuRes);
    }
  };
  return (
    <div>
      <div className="lg:-mt-24 lg:-mb-10">
        <Title subTitle={"What's new?"} title={"ADD AN ITEM"}></Title>
      </div>
      {/* Add item Form */}
      <div className="pb-8 px-5 mx-0 lg:mx-32">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 py-8 lg:px-24 space-y-5   font-inter bg-[#F3F3F3] rounded-md"
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="w-full space-y-2">
              <label className="font-bold text-gray-700">Recipe name*</label>
              <input
                {...register("name", { required: true })}
                className="input w-full input-bordered"
                type="text"
                name="name"
                placeholder="Recipe name"
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-bold text-gray-700">Category*</label>
              <select
                {...register("category", { required: true })}
                defaultValue="default"
                name="category"
                id="category"
                className="border p-3 input-bordered rounded-md"
              >
                <option disabled value="default">
                  Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-bold text-gray-700">Price *</label>
              <input
                {...register("price", { required: true })}
                id="price"
                name="price"
                placeholder="Price"
                type="number"
                className="border p-3 input-bordered rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="w-full space-y-2">
              <label className="font-bold text-gray-700">Recipe Details*</label>
              <textarea
                {...register("recipe", { required: true })}
                rows="10"
                cols="30"
                className="border border-gray-300 p-2 rounded-md w-full resize-none"
                type="text"
                name="recipe"
                placeholder="Recipe details"
                id=""
              />
            </div>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full  max-w-xs"
            />
          </div>
          <div className="w-full flex ">
            <button className="flex items-center justify-center gap-2 font-bold text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 md:px-8 md:py-4">
              Add Item <FaUtensils className="size-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Items;
