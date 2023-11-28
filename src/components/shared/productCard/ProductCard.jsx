// import React from 'react';

const ProductCard = ({ product }) => {
  const { image, name, price } = product;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title"> {name} </h2>
          <p className="text-xl"> ${price} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
