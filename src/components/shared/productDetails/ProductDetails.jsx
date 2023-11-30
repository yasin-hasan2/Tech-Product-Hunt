// import React from 'react';

import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const productDetail = useLoaderData();
  console.log(productDetail);
  const { image, name, description, price } = productDetail;

  return <div></div>;
};

export default ProductDetails;
