import { Rating } from "@smastrom/react-rating";
import Title from "../../../Components/Title/Title";
import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <Title subTitle={"What Our Clients Say"} title={"TESTIMONIALS"}></Title>
      <div className=" mx-auto">
        <div>
          <Swiper navigation={true}  loop={true} modules={[Autoplay,Navigation]} className="mySwiper -mt-12 mb-12 w-4/5 mx-auto">
            {reviews.map((review) => (
              <SwiperSlide className="container mx-auto" key={review.id}>
                <div>
                  <div className="flex w-full mt-6 mb-6 justify-center">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review.rating}
                    />
                  </div>
                  <div className="w-full flex justify-center">
                    <FaQuoteLeft className="size-8 md:size-20 text-black" />
                  </div>
                </div>
                <div className="space-y-4 pt-5">
                  <p className="font-inter md:w-2/3 md:text-lg md:mx-auto">
                    {review.details}
                  </p>
                  <p className="text-[#CD9003] text-2xl md:text-3xl font-inter text-center">
                    {review.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
