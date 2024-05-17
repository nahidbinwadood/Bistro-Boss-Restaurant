// eslint-disable-next-line react/prop-types
const Title = ({ subTitle, title }) => {
  return (
    <div className="my-20 pt-12  font-inter text-center space-y-4">
      <h2 className=" italic text-[#D99904] text-xl">
        ---{subTitle}---
      </h2>
      <div className="border-y-4 w-1/4 mx-auto">
        <h2 className="text-4xl my-6">{title}</h2>
      </div>
    </div>
  );
};

export default Title;
