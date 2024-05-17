// eslint-disable-next-line react/prop-types, no-unused-vars
const MenuComponent = ({data}) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {image,recipe,price,name}=data;
  return (
    <div>
      <div className="flex">
        <div>
          <img
            className="size-24"
            style={{ borderRadius: "0 200px 200px 200px" }}
            src={image}
            alt=""
          />
        </div>
        <div className="flex w-3/4 mx-auto ">
          <div className="space-y-2">
            <h2 className="font-cinzel text-xl">
              {" "}
              {name} ------------------
            </h2>
            <p className="font-inter text-gray-500">
              {recipe}
            </p>
          </div>
          <div className="text-[#BB8506] font-inter"> ${price}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
