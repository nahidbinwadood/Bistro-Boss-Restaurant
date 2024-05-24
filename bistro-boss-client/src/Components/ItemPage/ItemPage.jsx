import MenuComponent from "../../Shared/Menu/MenuComponent";

// eslint-disable-next-line react/prop-types
const ItemPage = ({image,title,subtitle,offered,type}) => {
  return (
    <div className="my-16 space-y-4">
      <div
        className=" md:h-[70vh] my-12"
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className=" bg-[#15151599] text-white flex flex-col py-6 my-6 md:py-6 mx-6 px-5 lg:py-24 items-center justify-center lg:mx-52">
            <h2 className="font-cinzel font-semibold text-2xl lg:text-4xl mb-4 uppercase">
              {title}
            </h2>
            <div>
              <p className=" font-inter md:w-2/3 lg:text-lg mx-auto text-center">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 container px-4 lg:px-0 mx-auto my-12">
        {offered.
        // eslint-disable-next-line react/prop-types
        filter((food) => food.category == `${type}`)
          .map((data) => (
            <MenuComponent key={data._id} data={data}></MenuComponent>
          ))}
      </div>
      <div className="lg:w-full text-center font-inter mt-12">
      <button className=" px-4 lg:px-8 py-4 rounded-xl font-inter outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-[#000000] lg:text-xl hover:bg-[#1F2937] hover:text-white transition hover:border-b-[#1F2937]">
        {"ORDER YOUR FAVORITE FOOD"}
      </button>
    </div>
    </div>
  );
};

export default ItemPage;
