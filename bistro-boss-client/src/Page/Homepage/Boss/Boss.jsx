import img1 from "../../../assets/home/chef-service.jpg";

const Boss = () => {
  return (
    <div className="pt-16">
      <div
        className="lg:h-[60vh] container mx-auto"
        style={{
          background: `url(${img1})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className=" bg-white flex gap-3 lg:gap-0 flex-col my-6 py-12 mx-6 lg:py-24 lg:mx-52  items-center justify-center ">
            <h2 className="font-cinzel text-2xl md:text-4xl  uppercase">Bistro Boss</h2>
            <div>
              <p className="lg:w-2/3 mx-4 lg:mx-auto text-center font-inter pt-2">
                Welcome to Bistro Boss, where exceptional dining meets a cozy
                atmosphere. Whether it is a casual lunch, romantic dinner, or
                family gathering, our exceptional service and culinary expertise
                ensure a memorable experience. Come taste the excellence at
                Bistro Boss!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boss;
