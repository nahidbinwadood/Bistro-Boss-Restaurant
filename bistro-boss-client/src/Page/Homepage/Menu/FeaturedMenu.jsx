import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MenuComponent from "../../../Shared/Menu/MenuComponent";
import ViewButton from "../../../Components/ViewButton/ViewButton";

const FeaturedMenu = () => {
  const [menu, setMenu] = useState([]);
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
      <ViewButton text={"View Full  Menu"}></ViewButton>
    </div>
  );
};

export default FeaturedMenu;
