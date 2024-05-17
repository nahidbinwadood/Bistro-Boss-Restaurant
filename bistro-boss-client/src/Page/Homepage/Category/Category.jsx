import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Title from "../../../Components/Title/Title";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
const Category = () => {
  return (
    <div className="my-16  container mx-auto">
      <Title
        subTitle={"From 11:00am to 10:00pm"}
        title={"ORDER ONLINE"}
      ></Title>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img className="w-full" src={img1} alt="" />
            <h2 className="font-cinzel text-center md:text-3xl uppercase text-white -mt-12">Salads</h2> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img2} alt="" />
          <h2 className="font-cinzel text-center md:text-3xl uppercase text-white -mt-12">PIZZA</h2> 
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} alt="" />
          <h2 className="font-cinzel text-center md:text-3xl uppercase text-white -mt-12">Soup</h2> 
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img4} alt="" />
          <h2 className="font-cinzel text-center md:text-3xl uppercase text-white -mt-12">Deserts</h2> 
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img5} alt="" />
          <h2 className="font-cinzel text-center md:text-3xl uppercase text-white -mt-12">Salads</h2> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
