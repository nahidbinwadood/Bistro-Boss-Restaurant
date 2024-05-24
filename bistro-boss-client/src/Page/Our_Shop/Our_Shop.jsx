import HeroBanner from "../../Shared/HeroBanner/HeroBanner";
import heroImg from "../../assets/Shop/Shop-bg.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Our_Shop.css";
import { useEffect, useState } from "react";
import ShopCard from "../../Components/ShopCard/ShopCard";
const Our_Shop = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div>
      <HeroBanner
        image={heroImg}
        title="OUR SHOP"
        subtitle="Would you like to try a dish?"
      ></HeroBanner>

      <div className="my-24 px-4 lg:px-0 container mx-auto">
        <Tabs className="space-y-5">
          <TabList className="flex mb-12 flex-wrap items-center justify-center uppercase font-inter font-medium md:text-xl">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items
                .filter((food) => food.category == "salad")
                .map((data) => (
                  <ShopCard key={data._id} data={data}></ShopCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items
                .filter((food) => food.category == "pizza")
                .map((data) => (
                  <ShopCard key={data._id} data={data}></ShopCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items
                .filter((food) => food.category == "soup")
                .map((data) => (
                  <ShopCard key={data._id} data={data}></ShopCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items
                .filter((food) => food.category == "dessert")
                .map((data) => (
                  <ShopCard key={data._id} data={data}></ShopCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items
                .filter((food) => food.category == "drinks")
                .map((data) => (
                  <ShopCard key={data._id} data={data}></ShopCard>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Our_Shop;
