 
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import Title from "../../../Components/Title/Title";

const Recommends = () => {
  return (
    <div className="container mx-auto my-16">
      <Title subTitle={"Should Try"} title={"CHEF RECOMMENDS"}></Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0 ">
        <div className="card font-inter  bg-base-100 shadow-xl pb-8">
          <figure>
            <img className="h-80 w-full object-cover"
              src={img1} 
              alt="Shoes"
            />
          </figure>
          <div className=" pt-6 text-center space-y-4">
            <h2 className="font-semibold text-2xl">Caeser Salad</h2>
            <p className="md:text-lg w-3/4 mx-auto">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="text-[#BB8506] px-8 py-4 rounded-xl outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-[#BB8506] md:text-xl hover:bg-[#1F2937] transition hover:border-b-[#1F2937]">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card font-inter  bg-base-100 shadow-xl pb-8">
          <figure>
            <img className="h-80 w-full object-cover"
              src={img2} 
              alt="Shoes"
            />
          </figure>
          <div className=" pt-6 text-center space-y-4">
            <h2 className="font-semibold text-2xl">Pizza</h2>
            <p className="md:text-lg w-3/4 mx-auto">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="text-[#BB8506] px-8 py-4 rounded-xl outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-[#BB8506] md:text-xl hover:bg-[#1F2937] transition hover:border-b-[#1F2937]">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card font-inter  bg-base-100 shadow-xl pb-8">
          <figure>
            <img className="h-80 w-full object-cover"
              src={img3} 
              alt="Shoes"
            />
          </figure>
          <div className=" pt-6 text-center space-y-4">
            <h2 className="font-semibold text-2xl">Caeser Soup</h2>
            <p className="md:text-lg w-3/4 mx-auto">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="text-[#BB8506] px-8 py-4 rounded-xl outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-[#BB8506] md:text-xl hover:bg-[#1F2937] transition hover:border-b-[#1F2937]">Add To Cart</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Recommends;
