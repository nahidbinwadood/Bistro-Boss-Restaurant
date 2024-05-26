import { useEffect, useState } from "react";
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";
import heroImg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import MenuComponent from "../../Shared/Menu/MenuComponent";
import ViewButton from "../../Components/ViewButton/ViewButton";
import ItemPage from "../../Components/ItemPage/ItemPage";
import Title from "../../Components/Title/Title";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const [offered, setOffered] = useState([]);
  console.log(offered);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/menu`)
      .then((res) => res.json())
      .then((data) => {
        setOffered(data);
      });
  }, []);
  return (
    <div>
      <HeroBanner
        image={heroImg}
        title="OUR MENU"
        subtitle="Would you like to try a dish?"
      ></HeroBanner>
      <Title title={"TODAY'S OFFER"} subTitle={"Don't miss"}></Title>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 container px-4 lg:px-0 mx-auto my-12">
        {offered
          .filter((food) => food.category == "offered")
          .map((data) => (
            <MenuComponent key={data._id} data={data}></MenuComponent>
          ))}
      </div>
      <div className="my-12">
       <Link to="/our-shop/salad"> <ViewButton text={"ORDER YOUR FAVORITE FOOD"}></ViewButton></Link>
      </div>

      {/* Dessert */}
      <ItemPage
        image={dessertBg}
        title={"DESSERTS"}
        page={"dessert"}
        subtitle={
          "Indulge in our decadent desserts, featuring rich chocolate cakes, creamy cheesecakes, and refreshing fruit tarts. Each treat is crafted to delight your taste buds and complete your perfect meal."
        }
        offered={offered}
        type={"dessert"}
      ></ItemPage>

      {/* Pizza */}
      <ItemPage
        image={pizzaBg}
        page={"pizza"}
        title={"Pizza"}
        subtitle={
          "Savor our pizzas, crafted with hand-tossed dough, premium toppings, and zesty sauces. From classic Margherita to gourmet specialties, each bite offers a perfect blend of flavors and freshness."
        }
        offered={offered}
        type={"pizza"}
      ></ItemPage>

      {/* Salad */}
      <ItemPage
        image={saladBg}
        title={"Salad"}
        page={"salad"}
        subtitle={
          "Experience our vibrant salads, made with fresh, crisp greens, seasonal veggies, and flavorful dressings. Each bowl is a delightful mix of health and taste, perfect for a light and refreshing meal."
        }
        offered={offered}
        type={"salad"}
      ></ItemPage>

      {/* Soup */}
      <ItemPage
        image={soupBg}
        page={"soup"}
        title={"Soup"}
        subtitle={
          "Warm up with our delicious soups, featuring rich broths, fresh ingredients, and bold flavors. From classic chicken noodle to creamy tomato bisque, each bowl is a comforting, hearty delight."
        }
        offered={offered}
        type={"soup"}
      ></ItemPage>
    </div>
  );
};

export default OurMenu;
