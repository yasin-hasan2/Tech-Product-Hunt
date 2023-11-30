// import React from 'react';

// import { comment } from "postcss";
import { useEffect } from "react";
import { useState } from "react";
import Review from "./review";

const ProductReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
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
