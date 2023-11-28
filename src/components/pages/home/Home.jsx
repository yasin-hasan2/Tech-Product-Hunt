// import React from 'react';

import { Helmet } from "react-helmet-async";
import Category from "../../shared/category/Category";
import Featured from "../../shared/featured/Featured";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bunty tech | Home </title>
      </Helmet>
      <Banner></Banner>

      <Featured></Featured>
      <Category></Category>
    </div>
  );
};

export default Home;
