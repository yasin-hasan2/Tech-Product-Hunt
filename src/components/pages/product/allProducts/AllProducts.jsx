// import React from 'react';

const AllProducts = ({ allProduct }) => {
  const { image, name, price } = allProduct;

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
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

export default AllProducts;
