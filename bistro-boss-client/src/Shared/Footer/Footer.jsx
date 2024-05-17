import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" h-[35vh] font-inter flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col   items-end justify-center px-24 text-white bg-[#1F2937] ">
          <div className="text-center space-y-5">
            <h2 className="text-2xl">CONTACT US</h2>
            <div className="text-lg space-y-1">
              <h2>123 ABS Street, Uni 21, Bangladesh</h2>
              <h2>+88 123456789</h2>
              <h2>Mon - Fri: 08:00 - 22:00</h2>
              <h2>Sat - Sun: 10:00 - 23:00</h2>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center px-24 text-center text-white bg-[#111827]">
          <div className="space-y-5">
            <h2 className="text-3xl -mt-6">Follow US</h2>
            {/* <div className="text-lg space-y-1">
              <h2 className="">Join us on social media</h2>
              <div className="flex items-center gap-2">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
              </div>
              <div></div>
            </div> */}
            <div className="text-lg space-y-8">
              <h2>Join us on social media</h2>
              <div className="flex items-center justify-center gap-4">
                <FaFacebookF className="size-8" />
                <FaInstagram className="size-8" />
                <FaTwitter  className="size-8"/>
              </div>
            </div>
          </div>
          <div className="hidden"></div>
        </div>
      </div>
      <div className="bg-[#151515] text-white py-3 text-center">
        <h2 className="text-lg">
          Copyright © CulinaryCloud. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
