import React from 'react';
import "../styles/hotitemcard.css"
import "../styles/hotaccessior.css"

const HotItemCard = ({image,name,index,price}) => {
  return <div className="HotItemCard">
 <img src={image} alt={`${index} product`}/>
 <p> {name}</p>
 <span> {price} </span>

  </div>;
};

export default HotItemCard;
