import React from 'react';
import { Link } from 'react-router-dom';

const ShopPage = (props) => {
  return (
    <div>
      <div className="box">
        <Link to="/shopImage"><img src={props.img} alt="" /></Link>
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}
export default ShopPage