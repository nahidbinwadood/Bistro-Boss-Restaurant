import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MenuComponent from "../../../Shared/Menu/MenuComponent";

const FeaturedMenu = () => {
  const [menu, setMenu] = useState([]);
  console.log(menu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((d) => d.category === "popular");
        setMenu(popular);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <Title subTitle={"Check it out"} title={"FROM OUR MENU"}></Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menu.map((data) => (
          <MenuComponent key={data.id} data={data}></MenuComponent>
        ))}
      </div>
      <div className="w-full text-center mt-12">
        <button className=" px-8 py-4 rounded-xl font-inter outline-none border-2 border-t-0 border-r-0 border-l-0 border-b-[#000000] text-xl hover:bg-[#1F2937] hover:text-white transition hover:border-b-[#1F2937]">
        View Full  Menu
        </button>
      </div>
    </div>
  );
};

export default FeaturedMenu;
