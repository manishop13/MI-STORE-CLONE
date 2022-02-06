import React from 'react';
import "../styles/starproduct.css"

const StarProduct = ({starProduct}) => {
  return <div className="starproduct">
      <div>
          <a href={starProduct[0].url}> <img src={starProduct[0].image} alt="ist profuct"/>
           </a>
      </div>
      <div> 
  <a href={starProduct[1].url}> <img src={starProduct[1].image} alt="ist profuct"/></a>
   <a href={starProduct[2].url}> <img src={starProduct[1].image} alt="ist profuct"/> </a>
     <a href={starProduct[3].url}> <img src={starProduct[3].image} alt="ist profuct"/> </a>
      </div>

  </div>;
};

export default StarProduct;
