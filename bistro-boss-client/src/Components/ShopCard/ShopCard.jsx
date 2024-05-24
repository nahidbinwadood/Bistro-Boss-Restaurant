// eslint-disable-next-line react/prop-types
const ShopCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, recipe ,price} = data;
  return (
    <div>
      <div className="card relative font-inter  bg-base-100 shadow-xl pb-8">
        <div className="absolute top-4 right-4">
            <h2 className="bg-[#111827] px-5 py-2 font-inter text-white">${price}</h2>
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
            <button className="text-[#BB8506] px-5 py-2 md:px-8 md:py-4 rounded-xl outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-[#BB8506] md:text-xl hover:bg-[#1F2937] transition hover:border-b-[#1F2937]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
