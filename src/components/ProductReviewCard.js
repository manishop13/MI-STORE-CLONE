import React from 'react';
import "../styles/productreview.css"

const ProductReviewCard = ({image,name,index,price,review}) => {
  return <div className="productreviewcard">
      <img src={image} alt={`${index} review`} />
 <h5> {review}</h5>
 <span> {name}</span>
 <b> {price} </b>
  </div>;
};

export default ProductReviewCard;
