// eslint-disable-next-line react/prop-types
const ViewButton = ({text}) => {
  return (
    <div className="lg:w-full text-center font-inter mt-12">
      <button className=" px-4 lg:px-8 py-4 rounded-xl font-inter outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-[#000000] lg:text-xl hover:bg-[#1F2937] hover:text-white transition hover:border-b-[#1F2937]">
        {text}
      </button>
    </div>
  );
};

export default ViewButton;
