// eslint-disable-next-line react/prop-types
const Title = ({ subTitle, title }) => {
  return (
    <div className="my-12 lg:my-20 pt-6 lg:pt-12 font-inter text-center space-y-4">
      <h2 className=" italic text-[#D99904] lg:text-xl">
        ---{subTitle}---
      </h2>
      <div className="border-y-2 lg:border-y-4 w-3/4 md:w-1/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl my-3 lg:my-6">{title}</h2>
      </div>
    </div>
  );
};

export default Title;
