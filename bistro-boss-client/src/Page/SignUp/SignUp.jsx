import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

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
        className="container py-12 mx-auto flex flex-col-reverse md:flex-row gap-6 md:gap-0 drop-shadow-[10px_5px_10px_rgba(0,0,0,0.5)]"
      >
        <div className="font-inter lg:w-1/2">
          <h2 className="text-center text-4xl font-bold">Sign Up</h2>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 py-8 lg:px-24 space-y-5 lg:py-20 font-inter  rounded-md"
            >
              <div className="w-full">
                <div className="w-full space-y-2">
                  <label className="font-bold text-gray-700">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="input w-full input-bordered "
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    id=""
                  />
                </div>
              </div>
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
                  <input
                    {...register("password", { required: true })}
                    className="input w-full input-bordered"
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    id=""
                  />
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  className="w-full cursor-pointer font-bold text-white bg-[#D1A054] px-4 py-2 md:px-8 md:py-4 transition"
                  value=" Sign Up"
                />
              </div>
              <div className="w-full text-center space-y-3 pt-2">
                <h2 className="text-[#D1A054] ">
                  Already registered?{" "}
                  <Link to="/login" className="font-semibold">
                    Go to log in
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
                  <div className="p-4 rounded-full border-2 border-[#444]">
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
        <div className="flex items-center justify-center">
          <img className="" src={loginImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
