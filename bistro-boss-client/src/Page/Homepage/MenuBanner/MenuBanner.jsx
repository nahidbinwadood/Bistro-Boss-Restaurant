import { Link } from "react-router-dom";
import Title from "../../../Components/Title/Title";
import img1 from "../../../assets/home/featured.jpg";


const MenuBanner = () => {
  return (
    <div
      className="lg:h-[80vh] my-24"
      style={{
        background: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",backgroundAttachment:"fixed"
      }}
    >
      <div className="bg-[#151515B3] h-full text-white">
        <Title subTitle={"Check it out"} title={"FROM OUR MENU"}></Title>
        <div className="container mx-auto pb-12 flex flex-col md:flex-row gap-12 px-5">
          <div className="md:w-1/2">
            <img className="h-96 w-full object-cover" src={img1} alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 justify-center font-inter">
            <h2 className="text-xl">March 20, 2023</h2>
            <h2 className="text-2xl">WHERE CAN I GET SOME? </h2>
            <p className="">
              Discover the best menu items like succulent ribeye steak, crispy
              calamari, and creamy truffle pasta. Savor fresh sushi rolls, spicy
              tuna tartare, and classic margherita pizza. For dessert, indulge
              in rich chocolate lava cake and tangy lemon tart. Each dish
              promises a delightful culinary experience that tantalizes the
              taste buds.
            </p>
            <Link to="/our-menu">
              <button className=" px-8 py-4 rounded-xl font-inter outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-white md:text-xl hover:bg-[#1F2937] hover:text-white transition hover:border-b-[#1F2937]">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
