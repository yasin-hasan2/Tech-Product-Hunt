// import React from 'react';

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, image, name, price } = product;

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <Link to={`/details/${_id}`}>
          <abbr title="click for details ">
            <figure>
              <img src={image} alt="Shoes" />
            </figure>
          </abbr>
        </Link>
        <div className="card-body text-white">
          <h2 className="card-title"> {name} </h2>
          <p className="text-xl"> ${price} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
