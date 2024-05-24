import { useEffect, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate } from "react-simple-captcha";
import "./login.css";
import {
  FaFacebookF,
  FaGoogle,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from './../../AuthProvider/useAuth';
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(true);
  const {logIn,googleLogIn }=useAuth();
  const navigate=useNavigate();
  // Google SignIn
  const handleGoogleSignIn = async () => {
    try {
      //firebase:
      const result = await googleLogIn();
      console.log(result);

      //Jwt:
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      console.log(data);
      toast.success("You've been Logged In Successfully");
      navigate(location?.state || "/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  //Form :
  const onSubmit = async(data) => {
    const { email, password } = data;
    try {
      const result = await logIn(email, password);
      console.log(result);
      // //Jwt:
      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/jwt`,
      //   { email: result?.user?.email },
      //   { withCredentials: true }
      // );
      console.log(data);
      navigate(location?.state || "/");
      toast.success("You've been Logged In Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Invalid credentials !");
    }
  };
 const handleCaptcha=(e)=>{
  console.log(e.target.value);
 }
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          background: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="container  py-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 drop-shadow-[10px_5px_10px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center justify-center">
          <img className="" src={loginImg} alt="" />
        </div>
        <div className="font-inter">
          <h2 className="text-center text-4xl font-bold">Login</h2>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 py-8 lg:px-24 space-y-5 lg:py-20 font-inter  rounded-md"
            >
              <div className="w-full">
                <div className="w-full space-y-2">
                  <label className="font-bold text-gray-700">Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="input w-full input-bordered"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    id=""
                  />
                </div>
              </div>
              <div>
                <div className="w-full space-y-2">
                  <label className="font-bold text-gray-700">Password</label>
                  <div className="relative">
                    <input
                      {...register("password", { required: true })}
                      className="input w-full input-bordered"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter Your Password"
                      id=""
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaEye className="absolute top-1/3 right-2 cursor-pointer" />
                      ) : (
                        <FaEyeSlash className="absolute top-1/3 right-2 cursor-pointer" />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full space-y-2">
                  <label>
                    <LoadCanvasTemplate />
                  </label>
                </div>
              </div>
              <div className="w-full">
                <textarea
                  {...register("captcha", { required: true })}
                  rows="1"
                  cols="1"
                  className="border  border-gray-300 p-4 rounded-md w-full resize"
                  type="text"
                  name="captcha"
                  placeholder="Enter Captcha"
                  id=""
                />
                <div className="flex ">
                  <button onClick={handleCaptcha} className="font-bold text-white rounded-md bg-[#686663] px-4 py-2 md:px-6 md:py-2 transition">
                    {" "}
                    Validate
                  </button>
                </div>
              </div>
              <div>
                <button  className="w-full cursor-pointer font-bold text-white bg-[#D1A054] px-4 py-2 md:px-8 md:py-4 transition">
                  Sign In{" "}
                </button>
              </div>
              <div className="w-full text-center space-y-3 pt-2">
                <h2 className="text-[#D1A054] ">
                  New here?{" "}
                  <Link to="/sign-up" className="font-semibold">
                    Create a New Account
                  </Link>
                </h2>
                <h2
                  className="text-xl font-medium pb-1
                "
                >
                  Or sign in with
                </h2>
                <div className="cursor-pointer flex items-center justify-center gap-6 lg:gap-12">
                  <div className="p-4 rounded-full border-2 border-[#444]">
                    <FaFacebookF className="size-6 text-[#444]" />
                  </div>
                  <div onClick={handleGoogleSignIn} className="p-4 rounded-full border-2 border-[#444]">
                    <FaGoogle className="size-6 text-[#444]" />
                  </div>
                  <div className="p-4 rounded-full border-2 border-[#444]">
                    <FaGithub className="size-6 text-[#444]" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
