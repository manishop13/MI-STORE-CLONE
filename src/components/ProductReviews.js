import React from 'react';
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/product.css"
const ProductReviews = ({productReviews}) => {
  return <div className="productreview">
      {
          productReviews.map((item,index)=>(
<ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image}/>
          ))
      }

  </div>;
};

export default ProductReviews;
