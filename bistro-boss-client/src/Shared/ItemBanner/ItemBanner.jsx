 // eslint-disable-next-line react/prop-types
const ItemBanner = ({image,title,subtitle}) => {
  return (
    <div
      className="h-[60vh] md:h-[70vh] my-12"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-full flex items-center justify-center">
        <div className=" bg-[#15151599] text-white flex flex-col py-12 md:py-6 mx-6 px-5 lg:py-24 items-center justify-center lg:mx-52">
          <h2 className="font-cinzel font-semibold text-2xl lg:text-4xl mb-4 uppercase">{title}</h2>
          <div>
            <p className=" font-inter md:w-2/3 lg:text-lg mx-auto text-center">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBanner;
