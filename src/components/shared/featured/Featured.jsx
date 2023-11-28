// import React from 'react';

import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const Featured = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className=" text-center my-10 text-6xl mx-auto py-10 border-b-2 text-white border-white w-[40rem] ">
          {" "}
          Featured Product{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {product.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
