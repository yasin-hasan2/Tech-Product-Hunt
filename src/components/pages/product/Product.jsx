// import React from 'react';

import { useLoaderData } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import AllProducts from "./allProducts/AllProducts";
import { useState } from "react";

const Product = () => {
  const productItem = useLoaderData();
  console.log(productItem);
  const [productLength, setProductLength] = useState([20]);

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
      <div className="grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {productItem.slice(0, productLength).map((allProduct) => (
          <AllProducts
            key={allProduct._id}
            allProduct={allProduct}
          ></AllProducts>
        ))}
      </div>
      <div className={productLength === productItem.length ? "hidden  " : ""}>
        <div className="flex justify-center mt-5 ">
          <button
            onClick={() => setProductLength(productItem.length)}
            className=" btn-outline flex items-center justify-center btn hover:btn-ghost text-white "
          >
            {" "}
            see all{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
