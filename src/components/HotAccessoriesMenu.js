import React from 'react';
import {Link} from "react-router-dom"
import "../styles/hotaccessoriesmenu.css"


const HotAccessoriesMenu = () => {
  return <div className="hotaccessoriesmenu">
  <Link className="hotaccessorieslink" to="/music"> Music Store</Link>
  <Link className="hotaccessorieslink" to="/smartDevice"> Smart Device</Link>
  <Link className="hotaccessorieslink" to="/home"> Home</Link>
  <Link className="hotaccessorieslink" to="/lifestyle"> Lifestyle</Link>
  <Link className="hotaccessorieslink" to="/mobileAccessories"> Mobile Accessories</Link>
  </div>;
};

export default HotAccessoriesMenu;
