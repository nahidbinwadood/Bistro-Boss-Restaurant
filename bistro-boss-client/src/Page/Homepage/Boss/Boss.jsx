import img1 from "../../../assets/home/chef-service.jpg";

const Boss = () => {
  return (
    <div className="pt-16">
      <div
        className="h-[60vh] container mx-auto"
        style={{
          background: `url(${img1})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className=" bg-white flex flex-col py-24  items-center justify-center mx-52">
            <h2 className="font-cinzel text-4xl  uppercase">Bistro Boss</h2>
            <div>
              <p className="w-2/3 mx-auto text-center font-inter pt-2">
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
