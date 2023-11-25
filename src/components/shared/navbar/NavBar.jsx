// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo/Picsart_23-11-25_02-36-10-903.png";

const NavBar = () => {
  const navOptions = (
    <>
      <ul tabIndex={0} className="menu lg:menu-horizontal px-1">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/product"> Product </Link>
        </li>
        <li>
          <Link> about </Link>
        </li>
      </ul>
    </>
  );

  return (
    <div>
      <div className="  sticky z-10 bg-opacity-30  h-28  navbar  bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>{" "}
          <img className="w-60 flex items-center" src={logo} alt="" />{" "}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
