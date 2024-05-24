import Title from "../../Components/Title/Title";
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";
import heroImg from "../../assets/contact/banner.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <HeroBanner
        image={heroImg}
        title="OUR SHOP"
        subtitle="Would you like to try a dish?"
      ></HeroBanner>
      <div className="container mx-auto px-4 lg:px-0">
        {/* Contact Icons */}
        <div>
          <Title title={"OUR LOCATION"} subTitle={"Visit Us"}></Title>
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200">
              <div className="bg-[#D1A054] py-4 flex justify-center">
                <FiPhoneCall className="size-8 text-white" />
              </div>
              <div className="h-[25vh] flex items-center justify-center ">
                <div className="text-center font-inter space-y-2">
                  <h2 className="md:text-2xl font-bold">PHONE</h2>
                  <h2 className="text-lg text-[#707070]">
                    +38 (012) 34 56 789
                  </h2>
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-[#D1A054] py-4 flex justify-center">
                <FaLocationDot className="size-8 text-white" />
              </div>
              <div className="h-[25vh] flex items-center justify-center ">
                <div className="text-center font-inter space-y-2">
                  <h2 className="md:text-2xl font-bold">ADDRESS</h2>
                  <h2 className="text-lg text-[#707070]">Dhaka,Bangladesh</h2>
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-[#D1A054] py-4 flex justify-center">
                <IoTime className="size-8 text-white" />
              </div>
              <div className="h-[25vh] flex items-center justify-center ">
                <div className="text-center font-inter space-y-2">
                  <h2 className="md:text-2xl font-bold">WORKING HOURS</h2>
                  <div>
                    <h2 className="text-lg text-[#707070]">
                      Mon - Fri: 08:00 - 22:00
                    </h2>
                    <h2 className="text-lg text-[#707070]">
                      Sat - Sun: 10:00 - 23:00
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="pb-8 lg:pb-24">
          <Title title={"CONTACT FORM"} subTitle={"Send Us a Message"}></Title>
          <form className="px-8 py-8 lg:px-24 space-y-5 lg:py-20 font-inter bg-gray-200 rounded-md">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="w-full space-y-2">
                <label className="font-bold text-gray-700">Name*</label>
                <input
                  className="input w-full input-bordered"
                  type="text"
                  name=""
                  placeholder="Enter Your Name"
                  id=""
                />
              </div>
              <div className="w-full space-y-2">
                <label className="font-bold text-gray-700">Email *</label>
                <input
                  className="input w-full input-bordered"
                  type="email"
                  name=""
                  placeholder="Enter Your Email"
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="w-full space-y-2">
                <label className="font-bold text-gray-700">Phone*</label>
                <input
                  className="input w-full input-bordered"
                  type="text"
                  name=""
                  placeholder="Enter Your Phone Numer"
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="w-full space-y-2">
                <label className="font-bold text-gray-700">Message*</label>
                <textarea
                rows="10"
                cols="30"
                  className="border border-gray-300 p-2 rounded-md w-full resize-none"
                  type="text"
                  name=""
                  placeholder="Enter Your Message"
                  id=""
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
                <button className="flex items-center justify-center gap-2 font-bold text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 md:px-8 md:py-4">Send Message <FaTelegramPlane className="size-6" /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
