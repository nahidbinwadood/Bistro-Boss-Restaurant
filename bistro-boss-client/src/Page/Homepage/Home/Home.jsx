import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import Call from "../Call/Call";
import Category from "../Category/Category";
import FeaturedMenu from "../Menu/FeaturedMenu";
import MenuBanner from "../MenuBanner/MenuBanner";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Boss></Boss>
      <FeaturedMenu></FeaturedMenu>
      <Call></Call>
      <Recommends></Recommends>
      <MenuBanner></MenuBanner>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
