// import React from 'react';

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import ProductReview from "../productReview/ProductReview";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const productDetail = useLoaderData();
  console.log(productDetail);
  const { image, name, description, price } = productDetail;

  const handleComments = (event) => {
    event.preventDefault();
    const form = event.target;
    const userComment = form.comment.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const usersCommentDetails = { userComment, userEmail, userName, userPhoto };
    console.log(usersCommentDetails);
    fetch(
      " https://product-hunt-server-lg4w4n8dn-yasins-projects-9cac5fb7.vercel.app/review",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(usersCommentDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Comment send ");
        }
      });
  };

  // const usersComments = { user };

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/3" src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-[#FFFFFF] ">
          <h2 className="card-title"> {name} </h2>
          <p> {description} </p>
          <div>
            <span> {price} </span>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 p-10 text-white ">
        <h4 className=" text-4xl "> Your commitment for this product </h4>
        <form className="flex flex-col" onSubmit={handleComments}>
          <textarea
            type="text"
            className=" mt-5 w-[20rem] textarea textarea-bordered"
            placeholder="Type your commitment"
            name="comment"
          ></textarea>
          <input className="btn w-40 mt-5 " type="submit" />
        </form>
      </div>
      <div>
        <ProductReview></ProductReview>
      </div>
    </div>
  );
};

export default ProductDetails;
