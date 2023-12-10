// import React from 'react';

import { Link } from "react-router-dom";
import signUp from "../../../../assets/img/signUp/undraw_access_account_re_8spm.svg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;
    console.log(displayName, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const users = { email, displayName, photoURL };
        fetch("https://product-hunt-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <div className=" bg-gradient-to-r from-[#605d53] to-[#5d5640] h-60 flex justify-center items-center">
          <h1 className="text-5xl font-normal text-white ">
            {" "}
            SignUp Form Below{" "}
          </h1>
        </div>
        <div className="hero text-textWhite  min-h-screen bg-base-200">
          <div className=" text-white flex gap-10 lg:gap-28 flex-col lg:flex-row ">
            <div className=" w-1/2   text-center lg:text-left">
              <img src={signUp} alt="" />
            </div>
            <div className="   text-center  lg:w-1/2    ">
              <h1 className="text-5xl font-bold"> SignUp now!</h1>
              <form onSubmit={handleLogIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Your Name </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Photo URL </span>
                  </label>
                  <input
                    type="url"
                    placeholder="PhotoUrl"
                    name="photoUrl"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn  text-[#FFFFFF] hover:btn-ghost btn-outline bg-bgred ">
                    Sign Up{" "}
                  </button>
                </div>
              </form>
              <p>
                If you have an account{" "}
                <Link className="text-red-600" to="/logIn">
                  {" "}
                  LogIn{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
