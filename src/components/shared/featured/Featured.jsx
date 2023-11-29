// import React from 'react';

import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const Featured = () => {
  const [product, setProduct] = useState([]);

  const [productLength, setProductLength] = useState([4]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className=" text-center my-10 text-6xl mx-auto py-10 border-b-2 text-white border-white lg:w-[40rem] ">
          {" "}
          Featured Product{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
        {product.slice(0, productLength).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className={productLength === product.length ? "hidden  " : ""}>
        <div className="flex justify-center mt-5 ">
          <button
            onClick={() => setProductLength(product.length)}
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

export default Featured;
