import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MenuComponent from "../../../Shared/Menu/MenuComponent";
import ViewButton from "../../../Components/ViewButton/ViewButton";
import { Link } from 'react-router-dom';

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 lg:mx-0">
        {menu.map((data) => (
          <MenuComponent key={data.id} data={data}></MenuComponent>
        ))}
      </div>
      <Link to="/our-menu"><ViewButton text={"View Full  Menu"}></ViewButton></Link>
    </div>
  );
};

export default FeaturedMenu;
