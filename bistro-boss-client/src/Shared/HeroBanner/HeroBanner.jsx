// eslint-disable-next-line react/prop-types
const HeroBanner = ({image,title,subtitle}) => {
  return (
    <div
      className="h-[60vh] lg:h-[80vh]"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex items-center justify-center h-full font-cinzel ">
        <div className="bg-[#15151599] space-y-4 text-center text-white p-8 md:px-24 md:py-12 lg:px-96 lg:py-36">
            <h2 className="text-3xl lg:text-6xl font-bold">{title}</h2>
            <h2 className="md:text-xl lg:text-2xl font-semibold">{subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
