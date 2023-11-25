// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import NavBar from "../shared/navbar/NavBar";

const Main = () => {
  return (
    <div className="container mx-auto font-roboto ">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
