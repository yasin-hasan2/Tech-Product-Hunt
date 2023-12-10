// import React from 'react';

import { Link } from "react-router-dom";
import login from "../../../../assets/img/logIn/undraw_login_re_4vu2.svg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaGooglePlusG } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Toast } from "react-toastify/dist/components";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(form, email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("user Login");
        // Navigate(location?.this.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoginWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        toast.success("user Login");
        // Navigate(location?.this.state ? location.state : "/");

        fetch("https://product-hunt-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div className=" bg-gradient-to-r from-[#605d53] to-[#5d5640] h-60 flex justify-center items-center">
        <h1 className="text-5xl font-normal text-white ">Log In Form Below </h1>
      </div>
      <div className="hero text-textWhite  min-h-screen bg-base-200">
        <div className=" text-white flex gap-10 lg:gap-28 flex-col lg:flex-row ">
          <div className=" w-1/2   text-center lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="   text-center  lg:w-1/2    ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  text-[#FFFFFF] hover:btn-ghost btn-outline bg-bgred ">
                  Log In{" "}
                </button>
              </div>
            </form>
            <button
              onClick={handleLoginWithGoogle}
              className="btn  text-[#FFFFFF] hover:btn-ghost btn-outline bg-bgred "
            >
              <FaGooglePlusG className="text-3xl"></FaGooglePlusG>{" "}
            </button>
            <p>
              If you are new In there{" "}
              <Link className="text-red-600 " to="/signUp">
                {" "}
                Sign Up{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
