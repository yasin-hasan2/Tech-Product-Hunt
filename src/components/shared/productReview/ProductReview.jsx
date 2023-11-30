// import React from 'react';

// import { comment } from "postcss";
import { useEffect } from "react";
import { useState } from "react";
import Review from "./review";

const ProductReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(
      " https://product-hunt-server-lg4w4n8dn-yasins-projects-9cac5fb7.vercel.app/review"
    )
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      {review.map((comments) => (
        <Review key={comments._id} comments={comments}></Review>
      ))}
    </div>
  );
};

export default ProductReview;
