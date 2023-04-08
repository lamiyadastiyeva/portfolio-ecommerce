import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
//import ShopProducts from './ShopProducts';

const ProductItem = (props) => {
  const {addItem}  = useCart();
  return (
     
  <div className="cart">
              <div className="icons">
                <a onClick={() => addItem(props.item)} className="fas fa-shopping-cart" />
                <a href="#" className="fas fa-heart" />
                <Link to="/shopProducts" className="fas fa-eye" />
              </div>
              <div className="image">
                <img src={props.img} alt="" />
              </div>
              <div className="content">
                <div className="price">{props.price}$</div>
                <h3>{props.title}</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
      
  )
};
export default ProductItem;
