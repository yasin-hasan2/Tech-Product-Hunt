// import React from 'react';

import { useLoaderData } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import AllProducts from "./allProducts/AllProducts";

const Product = () => {
  const productItem = useLoaderData();
  console.log(productItem);

  return (
    <div>
      <div className="  bg-[#312f2f57] rounded-lg h-[20rem] text-center text-[#FFF] ">
        <h1 className="text-5xl py-5">
          {" "}
          You Can search All Products are Here{" "}
        </h1>
        <div className="absolute  w-full justify-center flex items-center">
          <IoSearch className=" text-[#c2bcbca0] relative left-10 text-4xl font-bold"></IoSearch>{" "}
          <input
            type="text"
            placeholder=" Search  here"
            className=" my-5 input input-bordered pl-10 border  text-lg w-full max-w-xs"
          />
        </div>
      </div>
      <div className="grid gap-5  grid-cols-1 lg:grid-cols-4">
        {productItem.map((allProduct) => (
          <AllProducts
            key={allProduct._id}
            allProduct={allProduct}
          ></AllProducts>
        ))}
      </div>
    </div>
  );
};

export default Product;
